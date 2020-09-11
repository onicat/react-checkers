import React from 'react'

import 'styles/Row.css'

const Row = ({cells}) => {
  return (
    <div className='Row'>
      {cells}
    </div>
  )
};

export default Row;