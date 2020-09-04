import React from 'react'

import 'styles/Panel.css'
import { STAGES } from 'js/constants'
import getPlayerColor from 'js/getPlayerColor'

const Panel = ({currentPlayer, onlineTag, stage}) => {
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