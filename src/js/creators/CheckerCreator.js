class CheckerCreator {
  create(player, rowIndex, cellIndex) {
    return {
      player,
      type: 'soldier',
      rowIndex,
      cellIndex
    }
  }
}

export default CheckerCreator;