import React from 'react'

import 'styles/Checker.css'
import { PLAYERS_TAGS } from 'js/constants';

const Checker = ({checker}) => {
  const color = (
    (checker.player === PLAYERS_TAGS.PLAYER1) ? 'blue' : 'green'
  );
  
  return (
    <div className={`Checker Checker_${color}`}/>
  );
};

export default Checker;