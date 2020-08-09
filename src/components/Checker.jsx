import React from 'react'

import 'styles/Checker.css'
import { PLAYERS_TAGS, PLAYERS_COLORS } from 'js/constants';

const Checker = ({checker, selectChecker}) => {
  const color = (() => {
    if (checker.player === PLAYERS_TAGS.PLAYER1) {
      return PLAYERS_COLORS.PLAYER1;
    } else {
      return PLAYERS_COLORS.PLAYER2;
    }
  })();

  const clickHandler = selectChecker.bind(null, checker);
  
  return (
    <div 
      className={'Checker'}
      style={{backgroundColor: color}}
      onClick={clickHandler}
    />
  );
};

export default Checker;