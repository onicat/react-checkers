import React from 'react'

import 'styles/Panel.css'
import { STAGES } from 'js/constants'
import getPlayerColor from 'js/getPlayerColor'

const Panel = ({currentPlayer, onlineTag, stage, moveablePlayers}) => {
  if (moveablePlayers.length !== 2) {
    const playerColor = getPlayerColor(moveablePlayers[0]);
    
    return (
      <div className='Panel'>
        {(moveablePlayers.length === 0) ?
          <h2>Draw!</h2>:
          <h2 className='Panel__item Panel__item_winner'>
            <span style={{color: playerColor}}>
              {moveablePlayers[0]}
            </span>
            is the winner!
          </h2>
        }
      </div>
    )
  }
  
  return (
    <div className='Panel'>
      <h2 className='Panel__item Panel__item_player'>
        Player:&nbsp;
        <span style={{color: getPlayerColor(currentPlayer)}}>
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