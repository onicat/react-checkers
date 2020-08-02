import React from 'react'
import 'styles/Cell.css'

const Cell = ({cell}) => {
  return (
    <td className={`Cell Cell_${cell.type}`}></td>
  );
};

export default Cell;