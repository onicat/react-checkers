class WayCreator {
  create(type, movingChecker, jumpTo = null, eatenChecker = null) {
    return {
      type,
      movingChecker,
      jumpTo,
      eatenChecker
    }
  }
}

export default WayCreator;