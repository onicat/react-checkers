import React from 'react'

import 'styles/Cell.css'
import Checker from 'components/Checker'
import { computeClasses } from 'js/utils';

const Cell = ({cell, way, selectChecker}) => {
  const className = computeClasses({
    'Cell': true,
    'Cell_active': cell.type === 'active',
    'Cell_passive': cell.type === 'passive',
    'Cell_way_jump': way && way.type === 'jump'
  });
  
  return (
    <td className={className}>
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