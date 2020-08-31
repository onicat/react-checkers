import React from 'react'

import 'styles/Menu.css'
import Button from './Button'
import MenuDivider from './MenuDivider';

const Menu = () => {
  return (
    <div className='Menu'>
      <Button>Create room</Button>
      <MenuDivider/>
      <Button>Join</Button>
      <MenuDivider/>
      <Button>Exit</Button>
    </div>
  )
};

export default Menu;