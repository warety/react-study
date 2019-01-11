import chatTypes from './constants';
import socketTypes from '../sockets/constants';
import { combineReducers } from 'redux'

const initialState = {
  activeId: null,
  allIds: [],
  myIds: [],
  byIds: {}
};

const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case chatTypes.SET_ACTIVE_CHAT:
      return getChatId(action.payload.chat);
    case chatTypes.JOIN_CHAT_SUCCESS:
      return getChatId(action.payload.chat);
    case chatTypes.UNSET_ACTIVE_CHAT:
    case chatTypes.DELETE_CHAT_SUCCESS:
      return null;
    case socketTypes.RECIEVE_DELETED_CHAT:
      return state === getChatId(action.payload.chat) ? null : state;
    default:
      return state;
  }
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case chatTypes.FETCH_ALL_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case chatTypes.CREATE_CHAT_SUCCESS:
    case socketTypes.RECIEVE_NEW_CHAT:
      return [...state, getChatId(action.payload.chat)];
    case socketTypes.RECIEVE_DELETED_CHAT:
    case chatTypes.DELETE_CHAT_SUCCESS:
      return state.filter(
        chatId => chatId !== getChatId(action.payload.chat)
      );
    default:
      return state;
  }
};

const myIds = (state = initialState.myIds, action) => {
  switch (action.type) {
    case chatTypes.FETCH_MY_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case chatTypes.CREATE_CHAT_SUCCESS:
    case chatTypes.JOIN_CHAT_SUCCESS:
      return [...state, getChatId(action.payload.chat)];
    case chatTypes.LEAVE_CHAT_SUCCESS:
    case socketTypes.RECIEVE_DELETED_CHAT:
    case chatTypes.DELETE_CHAT_SUCCESS:
      return state.filter(
        chatId => chatId !== getChatId(action.payload.chat)
      );
    default:
      return state;
  }
};

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    case chatTypes.FETCH_ALL_CHATS_SUCCESS:
    case chatTypes.FETCH_MY_CHATS_SUCCESS:
      return {
        ...state,
        ...action.payload.chats.reduce((ids, chat) => ({
          ...ids,
          [getChatId(chat)]: chat,
        }), {}),
      }
    case chatTypes.JOIN_CHAT_SUCCESS:
    case chatTypes.LEAVE_CHAT_SUCCESS:
    case chatTypes.CREATE_CHAT_SUCCESS:
    case socketTypes.RECIEVE_NEW_CHAT:
      return {
        ...state,
        [getChatId(action.payload.chat)]: action.payload.chat,
      };
    case chatTypes.DELETE_CHAT_SUCCESS:
    case socketTypes.RECIEVE_DELETED_CHAT:
      const newState = { ...state };
      delete newState[getChatId(action.payload.chat)];
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  activeId,
  allIds,
  myIds,
  byIds,
})

export const getChatId = (chat) => chat._id;
export const getById = (state, id) => state.byIds[id];
export const getByIds = (state, ids) => ids.map(id => getById(state, id));
