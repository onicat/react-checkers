import React, { useState } from 'react'
import { connect } from 'react-redux';

import 'styles/Menu.css'
import Button from './Button'
import Input from './Input';
import { SERVER_WS_URL, STAGES, PLAYERS_TAGS } from 'js/constants';
import { changeOnlineTag, changeStage, resetBoard, resetCurrentPlayer } from 'redux/actions'
import requestActions from 'js/requestActions';

const Menu = ({
  stage,
  webSocketRef,
  changeOnlineTag,
  changeStage,
  changeMoveablePlayers,
  resetBoard,
  resetCurrentPlayer
}) => {
  const [inputValue, changeInputValue] = useState('');
  
  const joinButtonHandler = () => {
    webSocketRef.current = new WebSocket(SERVER_WS_URL);
    changeOnlineTag(PLAYERS_TAGS.PLAYER2);
    changeStage(STAGES.CONNECTING);

    webSocketRef.current.addEventListener('open', () => {
      webSocketRef.current.send(requestActions.join(inputValue, PLAYERS_TAGS.PLAYER2));
    });
  };

  const createRoomButtonHandler = () => {
    webSocketRef.current = new WebSocket(SERVER_WS_URL);
    changeOnlineTag(PLAYERS_TAGS.PLAYER1);
    changeStage(STAGES.CONNECTING);

    webSocketRef.current.addEventListener('open', () => {
      webSocketRef.current.send(requestActions.createRoom(PLAYERS_TAGS.PLAYER1));
      changeStage(STAGES.WAITING_FOR_PLAYER);
    });
  };

  const exitButtonHandler = () => {
    webSocketRef.current.close(1000, 'You are disconnected from the server');
  };

  const restartButtonHandler = () => {
    resetCurrentPlayer();
    changeOnlineTag(null);
    resetBoard();
    changeStage(STAGES.OFFLINE);
    changeMoveablePlayers([
      PLAYERS_TAGS.PLAYER1,
      PLAYERS_TAGS.PLAYER2]
    );
  };
  
  return (
    <div className='Menu'>
      <Button 
        disabled={stage !== STAGES.OFFLINE}
        onClick={createRoomButtonHandler}
      >
        Create room
      </Button>
      <div className='Menu__divider'/>
      <Input 
        type='short' 
        buttonText='Join'
        inputValue={inputValue}
        changeInputValue={changeInputValue}
      />
      <Button
        onClick={joinButtonHandler}
        disabled={stage !== STAGES.OFFLINE}
      >
        Join
      </Button>
      <div className='Menu__divider'/>
      <Button
        onClick={exitButtonHandler}
        disabled={stage === STAGES.OFFLINE}
      >
        Exit
      </Button>
      <Button
        onClick={restartButtonHandler}
        disabled={stage !== STAGES.OFFLINE}
      >
        Restart
      </Button>
    </div>
  )
};

export default connect(
  null,
  {changeOnlineTag, changeStage, resetCurrentPlayer, resetBoard}
)(Menu);