import React from 'react'

import 'styles/Cell.css'
import Checker from 'components/Checker'

const Cell = ({cell, selectChecker}) => {
  return (
    <td className={`Cell Cell_${cell.type}`}>
      {(cell.checker) ?
        <Checker 
          checker={cell.checker}
          selectChecker={selectChecker}
        /> :
        null
      }
    </td>
  );
};

export default Cell;