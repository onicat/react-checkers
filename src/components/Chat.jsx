import React from 'react'

import 'styles/Chat.css'
import Button from './Button'

const Chat = () => {
  return (
    <div className='Chat'>
      <div className='Chat__messages-block'>

      </div>
      <div className='Chat__interaction-block'>
        <input className='Chat__input'></input>
        <Button>Send</Button>
      </div>
    </div>
  )
};

export default Chat;