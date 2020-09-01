import React from 'react'
import { connect } from 'react-redux';

import 'styles/Menu.css'
import Button from './Button'
import MenuDivider from './MenuDivider';
import Input from './Input';
import { SERVER_WS_URL, STAGES, PLAYERS_TAGS } from 'js/constants';
import requestActions from 'js/requestActions';

const Menu = () => {
  const createRoom = () => {
    webSocketRef.current = new WebSocket(SERVER_WS_URL);
    changeOnlineTag(PLAYERS_TAGS.PLAYER1);
    changeStage(STAGES.CONNECTING);

    webSocketRef.current.addEventListener('open', () => {
      webSocketRef.current.send(requestActions.createRoom());
      changeStage(STAGES.WAITING_FOR_PLAYER);
    });

    webSocketRef.current.addEventListener('error', () => {
      changeStage(STAGES.OFFLINE);
      changeOnlineTag(null);
    });
  }
  
  return (
    <div className='Menu'>
      <Button>Create room</Button>
      <Button 
        onClick={createRoom}
      >
        Create room
      </Button>
      <MenuDivider/>
      <Input type='short' buttonText='Join'></Input>
      <Button>Join</Button>
      <MenuDivider/>
      <Button>Exit</Button>
    </div>
  )
};

export default Menu;