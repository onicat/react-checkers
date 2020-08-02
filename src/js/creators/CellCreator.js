class CellCreator {
  create(type, rowIndex, cellIndex) {
    return {
      type,
      checker: null,
      rowIndex,
      cellIndex
    }
  }
}

export default CellCreator;