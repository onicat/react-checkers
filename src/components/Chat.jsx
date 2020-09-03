/*eslint-disable default-case, react-hooks/exhaustive-deps*/

import React, { useState, useEffect } from 'react'

import 'styles/Chat.css'
import Input from './Input'
import Message from './Message';
import Button from './Button';
import { STAGES } from 'js/constants';
import { connect } from 'react-redux';
import { getOnlineTag } from 'redux/selectors';
import requestActions from 'js/requestActions';

const Chat = ({stage, webSocketRef, onlineTag}) => {
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

  const sendButtonHandler = () => {
    if (stage !== STAGES.ONLINE) return;

    writeMessage(onlineTag, inputValue);
    webSocketRef.current.send(requestActions.sendChatMessage(
      onlineTag,
      inputValue
    ));
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
      if (event.reason.length === 0) {
        writeMessage('System', 'The server is not available');
      } else {
        writeMessage('System', event.reason);
      }
    });

    webSocketRef.current.addEventListener('message', (msg) => {
      const {type, payload} = JSON.parse(msg.data);

      switch(type) {
        case 'SEND_ROOM_ID': {
          writeMessage('System', `Room created with id ${payload.id}`)
          break;
        }

        case 'SEND_CHAT_MESSAGE': {
          writeMessage(payload.senderTag, payload.text);
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
      <Button onClick={sendButtonHandler}>Send</Button>
    </div>
  )
};

const mapStateToProps = state => ({
  onlineTag: getOnlineTag(state)
});

export default connect(
  mapStateToProps
)(Chat);