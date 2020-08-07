class WayCreator {
  create(type, jumpTo = null, eatenChecker = null) {
    return {
      type,
      jumpTo,
      eatenChecker
    }
  }
}

export default WayCreator;