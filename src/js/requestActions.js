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

  sendChatMessage(roomId, senderTag) {
    return JSON.stringify({
      type: 'SEND_CHAT_MESSAGE',
      payload: {roomId, senderTag}
    });
  }
}

export default new RequestActions();