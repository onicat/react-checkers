import requestActionTypes from "./requestActionTypes";

class RequestActions {
  createRoom(initiatorTag) {
    return JSON.stringify({
      type: requestActionTypes.CREATE_ROOM,
      payload: {initiatorTag}
    });
  }

  join(id, initiatorTag) {
    return JSON.stringify({
      type: requestActionTypes.JOIN,
      payload: {id, initiatorTag}
    });
  }

  sendChatMessage(senderTag, text) {
    return JSON.stringify({
      type: requestActionTypes.SEND_CHAT_MESSAGE,
      payload: {senderTag, text}
    });
  }

  goToWay(initiatorTag, way) {
    return JSON.stringify({
      type: requestActionTypes.GO_TO_WAY,
      payload: {initiatorTag, way}
    });
  }
}

export default new RequestActions();