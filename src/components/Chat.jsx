import React from 'react'

import 'styles/Chat.css'
import Input from './Input'
import Button from './Button';

const Chat = () => {
  return (
    <div className='Chat'>
      <div className='Chat__messages-block'>

      </div>
      <Input
        className='Chat__input-form'
        type='long'
        buttonText='Send'
        inputValue={inputValue}
        changeInputValue={changeInputValue}
      ></Input>
      <Button>Send</Button>
    </div>
  )
};

export default Chat;