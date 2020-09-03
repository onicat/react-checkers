/*eslint-disable default-case, react-hooks/exhaustive-deps*/

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getBoard } from 'redux/selectors'
import Cell from './Cell'
import Row from './Row'
import WaysCreator from 'js/creators/WaysCreator'
import { moveChecker, removeChecker, togglePlayer } from 'redux/actions'
import { STAGES } from 'js/constants'
import requestActions from 'js/requestActions'

const Board = ({
  board,
  currentPlayer,
  onlineTag,
  stage,
  webSocketRef,
  moveChecker,
  removeChecker,
  togglePlayer
}) => {
  const [selectedChecker, selectChecker] = useState(null);
  
  const restrictedSelectChecker = checker => {
    if (checker && checker.player !== currentPlayer) return;
    if (stage === STAGES.ONLINE && currentPlayer !== onlineTag) return;

    selectChecker(checker);
  }

  const waysCreator = new WaysCreator(board);
  const ways = waysCreator.create(selectedChecker);

  const goToWay = (way) => {
    if (way.type === 'jump') {
      moveChecker(way.movingChecker, way);
    }

    if (way.type === 'eating') {
      removeChecker(way.eatenChecker);
      moveChecker(way.movingChecker, way);
    }

    if (stage === STAGES.ONLINE) {
      webSocketRef.current.send(requestActions.goToWay(onlineTag, way));
    }

    selectChecker(null);
    togglePlayer();
  };

  useEffect(() => {
    if (webSocketRef.current === null) return;
    
    webSocketRef.current.addEventListener('message', (msg) => {
      const {type, payload} = JSON.parse(msg.data);

      switch(type) {
        case 'GO_TO_WAY': {
          goToWay(payload.way);

          break;
        }

        case 'GAME_READY': {
          selectChecker(null);

          break;
        }
      }
    });
  }, [webSocketRef.current]);

  const renderRows = () => {
    const rows = [];

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      const cells = [];
      
      for (let cellIndex = 0; cellIndex < board[rowIndex].length; cellIndex++) {
        const cell = board[rowIndex][cellIndex];
        const way = (ways.has(cell)) ? ways.get(cell) : null;
        
        cells.push(
          <Cell 
            selectChecker={restrictedSelectChecker}
            goToWay={goToWay}
            key={cellIndex}
            cell={cell}
            way={way}
          />
        )
      }
      
      rows.push(<Row key={rowIndex} cells={cells}/>);
    }

    return rows;
  }
  
  return (
    <div>
      {renderRows()}
    </div>
  )
};

const mapStateToProps = (state) => ({
  board: getBoard(state)
});

export default connect(
  mapStateToProps,
  { moveChecker, removeChecker, togglePlayer }
)(Board);