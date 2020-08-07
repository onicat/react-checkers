class WayCreator {
  createJump(rowIndex, cellIndex) {
    return {
      type: 'jump',
      rowIndex,
      cellIndex
    }
  }
}

export default WayCreator;