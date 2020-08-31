import React from 'react'

import 'styles/Menu.css'
import Button from './Button'
import MenuDivider from './MenuDivider';
import InputForm from './InputForm';

const Menu = () => {
  return (
    <div className='Menu'>
      <Button>Create room</Button>
      <MenuDivider/>
      <InputForm type='short' buttonText='Join'></InputForm>
      <MenuDivider/>
      <Button>Exit</Button>
    </div>
  )
};

export default Menu;