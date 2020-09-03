import React from 'react'

import 'styles/Panel.css'
import { PLAYERS_COLORS, PLAYERS_TAGS, STAGES } from 'js/constants'

const Panel = ({currentPlayer, onlineTag, stage}) => {
  const playerColor = (() => {
    if (currentPlayer === PLAYERS_TAGS.PLAYER1) {
      return PLAYERS_COLORS.PLAYER1;
    } else {
      return PLAYERS_COLORS.PLAYER2;
    }
  })();
  
  return (
    <div className='Panel'>
      <h2 className='Panel__item Panel__item_player'>
        Player:&nbsp;
        <span style={{color: playerColor}}>
          {currentPlayer}
        </span>
      </h2>
      {(stage !== STAGES.ONLINE) ? null :
        <h2 className='Panel__item Panel__item_turn'>
          {(onlineTag === currentPlayer) ?
            'Your turn!' : 'Opponent \n moving...'
          }
        </h2>
      }
    </div>
  )
}

export default Panel;