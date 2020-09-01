import React from 'react'
import { connect } from 'react-redux';

import 'styles/Menu.css'
import Button from './Button'
import Input from './Input';
import { SERVER_WS_URL, STAGES, PLAYERS_TAGS } from 'js/constants';
import { changeOnlineTag, changeStage } from 'redux/actions'
import requestActions from 'js/requestActions';

const Menu = ({stage, webSocketRef, changeOnlineTag, changeStage}) => {
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
      <Button 
        disabled={stage !== STAGES.OFFLINE}
        onClick={createRoom}
      >
        Create room
      </Button>
      <div className='Menu__divider'/>
      <Input type='short' buttonText='Join'></Input>
      <Button
        disabled={stage !== STAGES.OFFLINE}
      >
        Join
      </Button>
      <div className='Menu__divider'/>
      <Button
        disabled={stage === STAGES.OFFLINE}
      >
        Exit
      </Button>
    </div>
  )
};

export default connect(
  null,
  {changeOnlineTag, changeStage}
)(Menu);