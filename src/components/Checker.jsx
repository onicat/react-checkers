import React from 'react'

import 'styles/Checker.css'
import { PLAYERS_TAGS, PLAYERS_COLORS } from 'js/constants';
import { computeClasses } from 'js/utils';

const Checker = ({checker, selectChecker}) => {
  const color = (() => {
    if (checker.player === PLAYERS_TAGS.PLAYER1) {
      return PLAYERS_COLORS.PLAYER1;
    } else {
      return PLAYERS_COLORS.PLAYER2;
    }
  })();

  const className = computeClasses({
    'Checker': true,
    'Checker_king': checker.type === 'king'
  });

  const clickHandler = selectChecker.bind(null, checker);
  
  return (
    <div 
      className={className}
      style={{backgroundColor: color}}
      onClick={clickHandler}
    />
  );
};

export default Checker;