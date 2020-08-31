import React from 'react'

import Button from './Button';
import 'styles/InputForm.css'
import { computeClasses } from 'js/utils';

const InputForm = ({buttonText, type, className}) => {
  const inputClassName = computeClasses({
    'InputForm__input': true,
    'InputForm__input_long': type === 'long',
    'InputForm__input_short': type === 'short',
  });
  
  return (
    <div className={(className) ? className : null}>
      <input className={inputClassName}></input>
      <Button>{buttonText}</Button>
    </div>
  )
};

export default InputForm;