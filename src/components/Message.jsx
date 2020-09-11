import React from 'react'

import 'styles/Message.css'
import { PLAYERS_TAGS, PLAYERS_COLORS } from 'js/constants';

const Message = ({author, text}) => {
  let authorColor = null;

  switch (author) {
    case PLAYERS_TAGS.PLAYER1: {
      authorColor = PLAYERS_COLORS.PLAYER1;
      break;
    }
    case PLAYERS_TAGS.PLAYER2: {
      authorColor = PLAYERS_COLORS.PLAYER2;
      break;
    }
    default: {
      authorColor = '#E5E5E5';
    }
  }

  return (
    <div className='Message'>
      <i 
        style={{color: authorColor}} 
        className='Message__author'
      >
        {author}:&#8195;
      </i>
      {text}
    </div>
  )
};

export default Message;