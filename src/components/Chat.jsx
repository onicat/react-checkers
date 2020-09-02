/*eslint-disable default-case, react-hooks/exhaustive-deps*/

import React, { useState, useEffect } from 'react'

import 'styles/Chat.css'
import Input from './Input'
import Message from './Message';
import Button from './Button';
import { STAGES } from 'js/constants';

const Chat = ({stage, webSocketRef}) => {
  const [messages, changeMessages] = useState([]);
  const [inputValue, changeInputValue] = useState('');

  const writeMessage = (author, text) => { 
    changeMessages(messages => [
      ...messages,
      <Message 
        key={messages.length}
        author={author}
        text={text}
      />
    ]);
  };

  useEffect(() => {
    switch(stage) {
      case STAGES.CONNECTING: {
        writeMessage('System', 'Connecting...');
        break;
      }

      case STAGES.ONLINE: {
        writeMessage('System', 'The game is ready. Play!');
        break;
      }
    }
  }, [stage]);

  useEffect(() => {
    if (webSocketRef.current === null) return;

    webSocketRef.current.addEventListener('close', (event) => {
      writeMessage('System', event.reason);
    });

    webSocketRef.current.addEventListener('message', (msg) => {
      const {type, payload} = JSON.parse(msg.data);

      switch(type) {
        case 'SEND_ROOM_ID': {
          writeMessage('System', `Room created with id ${payload.id}`)
          break;
        }
      }
    });
  }, [webSocketRef.current]);

  return (
    <div className='Chat'>
      <div className='Chat__messages-block'>
        {messages}
      </div>
      <Input
        className='Chat__input-form'
        type='long'
        buttonText='Send'
        inputValue={inputValue}
        changeInputValue={changeInputValue}
      />
      <Button>Send</Button>
    </div>
  )
};

export default Chat;