/*eslint-disable default-case, react-hooks/exhaustive-deps*/

import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Board from 'components/Board'
import Panel from 'components/Panel'
import { getCurrentPlayer, getStage, getOnlineTag } from 'redux/selectors'
import 'App.css'
import Menu from 'components/Menu'
import Chat from 'components/Chat'
import { resetBoard, resetCurrentPlayer, changeStage, changeOnlineTag } from 'redux/actions'
import { STAGES, PLAYERS_TAGS } from 'js/constants'

const App = ({
  currentPlayer,
  stage,
  onlineTag,
  resetBoard,
  resetCurrentPlayer, 
  changeStage,
  changeOnlineTag
}) => {
  const webSocketRef = useRef(null);
  const [moveablePlayers, changeMoveablePlayers] = useState([
    PLAYERS_TAGS.PLAYER1,
    PLAYERS_TAGS.PLAYER2
  ]);

  useEffect(() => {
    if (webSocketRef.current === null) return;

    webSocketRef.current.addEventListener('close', () => {
      if (stage === STAGES.ONLINE) {
        resetBoard();
        resetCurrentPlayer();
      }

      changeStage(STAGES.OFFLINE);
      changeOnlineTag(null)
    });

    webSocketRef.current.addEventListener('error', () => {
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
        <Panel 
          currentPlayer={currentPlayer}
          onlineTag={onlineTag}
          stage={stage}
          moveablePlayers={moveablePlayers}
        />
        <Board 
          onlineTag={onlineTag}
          stage={stage}
          currentPlayer={currentPlayer}
          webSocketRef={webSocketRef}
          changeMoveablePlayers={changeMoveablePlayers}
          moveablePlayers={moveablePlayers}
        />
      </div>
      <div className='App__module'>
        <Chat onlineTag={onlineTag} webSocketRef={webSocketRef} stage={stage}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentPlayer: getCurrentPlayer(state),
  stage: getStage(state),
  onlineTag: getOnlineTag(state)
});

export default connect(
  mapStateToProps,
  {resetBoard, resetCurrentPlayer, changeStage, changeOnlineTag}
)(App);
