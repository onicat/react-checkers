import React, { useRef } from 'react'
import { connect } from 'react-redux'

import Board from 'components/Board'
import Panel from 'components/Panel'
import { getCurrentPlayer, getStage } from 'redux/selectors'
import 'App.css'
import Menu from 'components/Menu'
import Chat from 'components/Chat'

const App = ({currentPlayer, stage}) => {
  const webSocketRef = useRef(null);

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
  mapStateToProps
)(App);
