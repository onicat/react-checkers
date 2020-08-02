export const isActiveCell = (rowIndex, cellIndex) => {
  return ((rowIndex + cellIndex) & 1) === 1;
};