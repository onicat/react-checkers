import React from 'react'

import 'styles/Cell.css'
import Checker from 'components/Checker'
import { computeClasses } from 'js/utils';

const Cell = ({cell, way, selectChecker, goToWay}) => {
  const className = computeClasses({
    'Cell': true,
    'Cell_active': cell.type === 'active',
    'Cell_passive': cell.type === 'passive',
    'Cell_way_jump': way && way.type === 'jump'
  });

  const clickHandler = (way) ? goToWay.bind(null, way) : null;

  return (
    <td 
      className={className}
      onClick={clickHandler}
    >
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