import React from 'react'

import 'styles/Chat.css'
import InputForm from './InputForm'

const Chat = () => {
  return (
    <div className='Chat'>
      <div className='Chat__messages-block'>

      </div>
      <InputForm
        className='Chat__input-form'
        type='long'
        buttonText='Send'
      ></InputForm>
    </div>
  )
};

export default Chat;