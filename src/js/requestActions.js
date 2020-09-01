class RequestActions {
  createRoom() {
    return JSON.stringify({
      type: 'CREATE_ROOM',
      payload: null
    });
  }

  join(id) {
    return JSON.stringify({
      type: 'JOIN',
      payload: {id}
    });
  }
}

export default new RequestActions();