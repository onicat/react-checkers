import React from 'react'

import 'styles/Input.css'
import { computeClasses } from 'js/utils';

const Input = ({
  type,
  className,
  changeInputValue,
  inputValue
}) => {
  const inputClassName = computeClasses({
    'Input': true,
    'Input_long': type === 'long',
    'Input_short': type === 'short',
    [className]: className !== undefined
  });

  return (
    <input 
      className={inputClassName}
      onChange={(event) => changeInputValue(event.target.value)}
      value={inputValue}
    ></input>
  )
};

export default Input;