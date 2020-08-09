import React from 'react'

import 'styles/Panel.css'
import { PLAYERS_COLORS, PLAYERS_TAGS } from 'js/constants'

const Panel = ({currentPlayer}) => {
  const playerColor = (() => {
    if (currentPlayer === PLAYERS_TAGS.PLAYER1) {
      return PLAYERS_COLORS.PLAYER1;
    } else {
      return PLAYERS_COLORS.PLAYER2;
    }
  })();
  
  return (
    <div className='Panel'>
      <h2 className='Panel__text'>
        Player:&nbsp;
        <span style={{color: playerColor}}>
          {currentPlayer}
        </span>
      </h2>
    </div>
  )
}

export default Panel;