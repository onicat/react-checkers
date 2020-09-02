/*eslint-disable default-case, react-hooks/exhaustive-deps*/

import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'

import Board from 'components/Board'
import Panel from 'components/Panel'
import { getCurrentPlayer, getStage } from 'redux/selectors'
import 'App.css'
import Menu from 'components/Menu'
import Chat from 'components/Chat'
import { resetBoard, resetCurrentPlayer, changeStage, changeOnlineTag } from 'redux/actions'
import { STAGES } from 'js/constants'

const App = ({
  currentPlayer,
  stage,
  resetBoard,
  resetCurrentPlayer, 
  changeStage,
  changeOnlineTag
}) => {
  const webSocketRef = useRef(null);

  useEffect(() => {
    if (webSocketRef.current === null) return;

    webSocketRef.current.addEventListener('close', (msg) => {
      if (stage === STAGES.ONLINE) {
        resetBoard();
        resetCurrentPlayer();
      }

      changeStage(STAGES.OFFLINE);
      changeOnlineTag(null)
    });

    webSocketRef.current.addEventListener('error', (msg) => {
      changeStage(STAGES.OFFLINE);
      changeOnlineTag(null)
    });

    webSocketRef.current.addEventListener('message', (msg) => {
      const {type} = JSON.parse(msg.data);

      switch(type) {
        case 'GAME_READY': {
          resetBoard();
          resetCurrentPlayer();
          changeStage(STAGES.ONLINE);

          break;
        }
      }
    });

  }, [webSocketRef.current]);

  return (
    <div className='App'>
      <Menu stage={stage} webSocketRef={webSocketRef}/>
      <div className='App__module'>
        <Panel currentPlayer={currentPlayer}/>
        <Board currentPlayer={currentPlayer}/>
      </div>
      <div className='App__module'>
        <Chat webSocketRef={webSocketRef} stage={stage}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentPlayer: getCurrentPlayer(state),
  stage: getStage(state)
});

export default connect(
  mapStateToProps,
  {resetBoard, resetCurrentPlayer, changeStage, changeOnlineTag}
)(App);
