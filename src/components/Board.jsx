import React, { useState } from 'react'
import { connect } from 'react-redux'

import { getBoard } from 'redux/selectors'
import Cell from './Cell'
import Row from './Row'
import WaysCreator from 'js/creators/WaysCreator'
import { moveChecker, removeChecker, togglePlayer } from 'redux/actions'

const Board = ({
  board,
  currentPlayer,
  moveChecker,
  removeChecker,
  togglePlayer
}) => {
  const [selectedChecker, selectChecker] = useState(null);
  
  const restrictedSelectChecker = checker => {
    if (checker && checker.player === currentPlayer) {
      selectChecker(checker);
    }
  }

  const waysCreator = new WaysCreator(board);
  const ways = waysCreator.create(selectedChecker);

  const goToWay = (way) => {
    if (way.type === 'jump') {
      moveChecker(selectedChecker, way);
    }

    if (way.type === 'eating') {
      removeChecker(way.eatenChecker);
      moveChecker(selectedChecker, way);
    }

    selectChecker(null);
    togglePlayer();
  };

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