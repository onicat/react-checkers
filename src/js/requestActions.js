class RequestActions {
  createRoom(initiatorTag) {
    return JSON.stringify({
      type: 'CREATE_ROOM',
      payload: {initiatorTag}
    });
  }

  join(id, initiatorTag) {
    return JSON.stringify({
      type: 'JOIN',
      payload: {id, initiatorTag}
    });
  }
}

export default new RequestActions();