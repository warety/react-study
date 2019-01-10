import TYPES from './constants';
import { combineReducers } from 'redux'

const initialState = {
  activeId: null,
  allIds: [],
  myIds: [],
  byIds: {}
};

const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case TYPES.SET_ACTIVE_CHAT:
      return getChatId(action.payload.chat);
    case TYPES.JOIN_CHAT_SUCCESS:
      return getChatId(action.payload.chat);
    case TYPES.UNSET_ACTIVE_CHAT:
      return null;
    case TYPES.DELETE_CHAT_SUCCESS:
      return null;
    default:
      return state;
  }
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case TYPES.FETCH_ALL_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case TYPES.CREATE_CHAT_SUCCESS:
      return [...state, getChatId(action.payload.chat)];
    case TYPES.DELETE_CHAT_SUCCESS:
      return state.filter(
        chatId => chatId !== getChatId(action.payload.chat)
      );
    default:
      return state;
  }
};

const myIds = (state = initialState.myIds, action) => {
  switch (action.type) {
    case TYPES.FETCH_MY_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case TYPES.CREATE_CHAT_SUCCESS:
    case TYPES.JOIN_CHAT_SUCCESS:
      return [...state, getChatId(action.payload.chat)];
    case TYPES.LEAVE_CHAT_SUCCESS:
    case TYPES.DELETE_CHAT_SUCCESS:
      return state.filter(
        chatId => chatId !== getChatId(action.payload.chat)
      );
    default:
      return state;
  }
};

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    case TYPES.FETCH_ALL_CHATS_SUCCESS:
    case TYPES.FETCH_MY_CHATS_SUCCESS:
      return {
        ...state,
        ...action.payload.chats.reduce((ids, chat) => ({
          ...ids,
          [getChatId(chat)]: chat,
        }), {}),
      }
    case TYPES.CREATE_CHAT_SUCCESS:
      return {
        ...state,
        [getChatId(action.payload.chat)]: action.payload.chat,
      };
    case TYPES.DELETE_CHAT_SUCCESS:
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
