import React from 'react'

import 'styles/Button.css'

const Button = ({children, disabled, onClick}) => {
  return (
    <button 
      className={`Button ${(disabled) ? 'Button_disabled' : ''}`}
      onClick={(disabled) ? null : onClick}
    >
      {children}
    </button>
  )
};

export default Button;