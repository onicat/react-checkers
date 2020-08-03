import React, { useState } from 'react'
import { connect } from 'react-redux';

import { getBoard } from 'redux/selectors';
import Cell from './Cell';
import Row from './Row';
import WaysCreator from 'js/creators/WaysCreator';
import { moveChecker } from 'redux/actions'

const Board = ({board, moveChecker}) => {
  const [selectedChecker, selectChecker] = useState(null);
  
  const waysCreator = new WaysCreator(board);
  const ways = waysCreator.create(selectedChecker);

  const goToWay = (way) => {
    if (way.type === 'jump') {
      moveChecker(selectedChecker, way);
      selectChecker(null);
    }
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
            selectChecker={selectChecker}
            goToWay={goToWay}
            key={cellIndex}
            cell={cell}
            way={way}
          />)
      }
      
      rows.push(<Row key={rowIndex} cells={cells}/>);
    }

    return rows;
  }
  
  return (
    <table>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
};

const mapStateToProps = (state) => ({
  board: getBoard(state)
});

export default connect(
  mapStateToProps,
  { moveChecker }
)(Board);