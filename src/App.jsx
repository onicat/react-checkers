import React from 'react'
import { connect } from 'react-redux'

import Board from 'components/Board'
import Panel from 'components/Panel'
import { getCurrentPlayer } from 'redux/selectors'
import 'App.css'

const App = ({currentPlayer}) => {
  return (
    <div className='App'>
      <Panel currentPlayer={currentPlayer}/>
      <Board currentPlayer={currentPlayer}/>
    </div>
  )
}

const mapStateToProps = state => ({
  currentPlayer: getCurrentPlayer(state)
});

export default connect(
  mapStateToProps
)(App);
