class CellCreator {
  create(type) {
    return {
      type,
      checker: null
    }
  }
}

export default CellCreator;