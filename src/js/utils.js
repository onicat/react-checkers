export const isActiveCell = (rowIndex, cellIndex) => {
  return ((rowIndex + cellIndex) & 1) === 1;
};

export const computeClasses = (classesList) => {
  const classesArray = [];

  for (let [className, isExist] of Object.entries(classesList)) {
    if (isExist) {
      classesArray.push(className);
    }
  }

  return classesArray.join(' ');
}