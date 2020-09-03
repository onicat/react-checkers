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

  sendChatMessage(senderTag, text) {
    return JSON.stringify({
      type: 'SEND_CHAT_MESSAGE',
      payload: {senderTag, text}
    });
  }

  goToWay(initiatorTag, way) {
    return JSON.stringify({
      type: 'GO_TO_WAY',
      payload: {initiatorTag, way}
    });
  }
}

export default new RequestActions();