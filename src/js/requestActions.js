class RequestActions {
  createRoom() {
    return JSON.stringify({
      type: 'CREATE_ROOM',
      payload: null
    });
  }
}

export default new RequestActions();