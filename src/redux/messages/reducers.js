import chatTypes from '../chats/constants';
import socketTypes from '../sockets/constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case socketTypes.RECIEVE_MESSAGE:
      return [...state, action.payload.message];
    case chatTypes.FETCH_CHAT_SUCCESS:
      return action.payload.chat.messages;
    default:
      return state;
  }
};
