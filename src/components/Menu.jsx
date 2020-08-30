import React from 'react'

import 'styles/Menu.css'
import Button from './Button'

const Menu = () => {
  return (
    <div className='Menu'>
      <Button>Create room</Button>
      <Button>Join</Button>
      <Button>Exit</Button>
    </div>
  )
};

export default Menu;