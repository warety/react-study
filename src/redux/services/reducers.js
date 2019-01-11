import { combineReducers } from 'redux'; 
import authTypes from '../auth/constants';
import chatsTypes from '../chats/constants';
import socketsTypes from '../sockets/constants';

const initialState = {
  isFetching: {
    signup: false,
    login: false,
    logout: false,
    recieveAuth: false,
    allChats: false,
    myChats: false,
    chat: false,
    createChat: false,
    joinChat: false,
    leaveChat: false,
    deleteChat: false,
    sockets: false,
    editUser: false,
  },
  errors: {
    auth: null,
    chat: null,
  },
  isConnected: false,
}

export const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case authTypes.SIGNUP_REQUEST:
      return { ...state, signup: true };
    case authTypes.LOGIN_REQUEST:
      return { ...state, login: true };
    case authTypes.LOGOUT_REQUEST:
      return { ...state, logout: true };
    case authTypes.RECIEVE_AUTH_REQUEST:
      return { ...state, recieveAuth: true };
    case chatsTypes.FETCH_ALL_CHATS_REQUEST:
      return { ...state, allChats: true };
    case chatsTypes.FETCH_MY_CHATS_REQUEST:
      return { ...state, myChats: true };
    case chatsTypes.FETCH_CHAT_REQUEST:
      return { ...state, chat: true };
    case chatsTypes.CREATE_CHAT_REQUEST:
      return { ...state, createChat: true };
    case chatsTypes.JOIN_CHAT_REQUEST:
      return { ...state, joinChat: true };
    case chatsTypes.LEAVE_CHAT_REQUEST:
      return { ...state, leaveChat: true };
    case chatsTypes.DELETE_CHAT_REQUEST:
      return { ...state, deleteChat: true };
    case socketsTypes.SOCKETS_CONNECTION_REQUEST:
      return { ...state, sockets: true };
    case authTypes.EDIT_USER_REQUEST:
      return { ...state, editUser: true };

    case authTypes.SIGNUP_SUCCESS:
    case authTypes.SIGNUP_FAILURE:
      return { ...state, signup: false };
    case authTypes.LOGIN_SUCCESS:
    case authTypes.LOGIN_FAILURE:
      return { ...state, login: false };
    case authTypes.LOGOUT_SUCCESS:
    case authTypes.LOGOUT_FAILURE:
      return { ...state, logout: false };
    case authTypes.RECIEVE_AUTH_SUCCESS:
    case authTypes.RECIEVE_AUTH_FAILURE:
      return { ...state, recieveAuth: false };
    case chatsTypes.FETCH_ALL_CHATS_SUCCESS:
    case chatsTypes.FETCH_ALL_CHATS_FAILURE:
      return { ...state, allChats: false };
    case chatsTypes.FETCH_MY_CHATS_SUCCESS:
    case chatsTypes.FETCH_MY_CHATS_FAILURE:
      return { ...state, myChats: false };
    case chatsTypes.FETCH_CHAT_SUCCESS:
    case chatsTypes.FETCH_CHAT_FAILURE:
      return { ...state, chat: false };
    case chatsTypes.CREATE_CHAT_SUCCESS:
    case chatsTypes.CREATE_CHAT_FAILURE:
      return { ...state, createChat: false };
    case chatsTypes.JOIN_CHAT_SUCCESS:
    case chatsTypes.JOIN_CHAT_FAILURE:
      return { ...state, joinChat: false };
    case chatsTypes.LEAVE_CHAT_SUCCESS:
    case chatsTypes.LEAVE_CHAT_FAILURE:
      return { ...state, leaveChat: false };
    case chatsTypes.DELETE_CHAT_SUCCESS:
    case chatsTypes.DELETE_CHAT_FAILURE:
      return { ...state, deleteChat: false };
    case socketsTypes.SOCKETS_CONNECTION_SUCCESS:
    case socketsTypes.SOCKETS_CONNECTION_FAILURE:
      return { ...state, sockets: false };
    case authTypes.EDIT_USER_SUCCESS:
    case authTypes.EDIT_USER_FAILURE:
      return { ...state, editUser: false };
    default:
      return state;
  }
}

export const errors = (state = initialState.errors, action) => {
  switch (action.type) {
    case authTypes.SIGNUP_FAILURE:
    case authTypes.LOGIN_FAILURE:
    case authTypes.LOGOUT_FAILURE:
      // Used for internal needs
      // case types.RECIEVE_AUTH_FAILURE:
      return { ...state, auth: action.payload };

    case authTypes.SIGNUP_SUCCESS:
    case authTypes.LOGIN_SUCCESS:
    case authTypes.LOGOUT_SUCCESS:
      // Used for internal needs
      // case types.RECIEVE_AUTH_SUCCESS:
      return { ...state, auth: null };

    case chatsTypes.FETCH_ALL_CHATS_FAILURE:
    case chatsTypes.FETCH_MY_CHATS_FAILURE:
    case chatsTypes.FETCH_CHAT_FAILURE:
    case chatsTypes.CREATE_CHAT_FAILURE:
    case chatsTypes.JOIN_CHAT_FAILURE:
    case chatsTypes.LEAVE_CHAT_FAILURE:
    case chatsTypes.DELETE_CHAT_FAILURE:
    case socketsTypes.SOCKETS_CONNECTION_FAILURE:
    case authTypes.EDIT_USER_FAILURE:
      return { ...state, chat: action.payload };
    case chatsTypes.FETCH_ALL_CHATS_SUCCESS:
    case chatsTypes.FETCH_MY_CHATS_SUCCESS:
    case chatsTypes.FETCH_CHAT_SUCCESS:
    case chatsTypes.CREATE_CHAT_SUCCESS:
    case chatsTypes.JOIN_CHAT_SUCCESS:
    case chatsTypes.LEAVE_CHAT_SUCCESS:
    case chatsTypes.DELETE_CHAT_SUCCESS:
    case socketsTypes.SOCKETS_CONNECTION_SUCCESS:
    case authTypes.EDIT_USER_SUCCESS:
      return { ...state, chat: null };
    default:
      return state;
  }
};

export const isConnected = (state = initialState.isConnected, action) => {
  switch (action.type) {
    case socketsTypes.SOCKETS_CONNECTION_MISSING:
    case socketsTypes.SOCKETS_CONNECTION_FAILURE:
      return false;
    case socketsTypes.SOCKETS_CONNECTION_SUCCESS:
      return true;
    default:
      return state;
  }
};

export const getChatError = (state) => state.services.errors.chat;
export const getAuthError = (state) => state.services.errors.auth;
export const getIsConnected = (state) => state.services.isConnected;

export default combineReducers({
  isFetching,
  errors,
  isConnected,
})
