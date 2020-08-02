import React from 'react'

import 'styles/Checker.css'
import { PLAYERS_TAGS } from 'js/constants';

const Checker = ({checker, selectChecker}) => {
  const color = (
    (checker.player === PLAYERS_TAGS.PLAYER1) ? 'blue' : 'green'
  );

  const clickHandler = selectChecker.bind(null, checker);
  
  return (
    <div 
      className={`Checker Checker_${color}`}
      onClick={clickHandler}
    />
  );
};

export default Checker;