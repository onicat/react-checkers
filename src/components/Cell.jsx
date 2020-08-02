import React from 'react'

import 'styles/Cell.css'
import Checker from 'components/Checker'

const Cell = ({cell}) => {
  return (
    <td className={`Cell Cell_${cell.type}`}>
      {(cell.checker) ?
        <Checker checker={cell.checker}/> :
        null
      }
    </td>
  );
};

export default Cell;