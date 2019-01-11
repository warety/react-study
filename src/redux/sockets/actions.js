import TYPES from './constants';
import SocketIOClient from 'socket.io-client';
import { redirect } from '../services/actions';

export function missingSocketConnection() {
  return {
    type: TYPES.SOCKETS_CONNECTION_MISSING,
    payload: new Error('Missing connection'),
  }
}

let socket = null;

export function socketsConnect() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    const { isFetching } = getState().services;

    if (isFetching.sockets) {
      return Promise.resolve();
    }

    dispatch({
      type: TYPES.SOCKETS_CONNECTION_REQUEST
    })

    socket = SocketIOClient('ws://localhost:8000/', {
      query: { token }
    })

    socket.on('connect', () => {
      dispatch({
        type: TYPES.SOCKETS_CONNECTION_SUCCESS,
      })
    });

    socket.on('error', (error) => {
      dispatch({
        type: TYPES.SOCKETS_CONNECTION_FAILURE,
        payload: new Error(`Connection ${error}`),
      })
    });

    socket.on('connect_error', () => {
      dispatch({
        type: TYPES.SOCKETS_CONNECTION_FAILURE,
        payload: new Error('We have lost connection'),
      })
    });

    socket.on('new-message', (message) => {
      dispatch({
        type: TYPES.RECIEVE_MESSAGE,
        payload: message,
      })
    })

    socket.on('new-chat', ({ chat }) => {
      dispatch({
        type: TYPES.RECIEVE_NEW_CHAT,
        payload: chat,
      })
    })

    socket.on('deleted-chat', ({ chat }) => {
      const { activeId } = getState().chats;
      dispatch({
        type: TYPES.RECIEVE_DELETED_CHAT,
        payload: chat,
      })

      if (activeId == chat._id) {
        dispatch(redirect('/chat'));
      }
    })
  }
}

export function sendMessage(content) {
  return (dispatch, getState) => {
    const { activeId } = getState().chats;

    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('send-message', {
        chatId: activeId,
        content,
      }, () => {
        dispatch({
          type: TYPES.SEND_MESSAGE,
          payload: {
            chatId: activeId,
            content,
          },
        });
      },
    );
  };
}

export function mountChat(chatId) {
  return (dispatch) => {
    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('mount-chat', chatId);

    dispatch({
      type: TYPES.MOUNT_CHAT,
      payload: { chatId },
    });
  };
}
export function unmountChat(chatId) {
  return (dispatch) => {
    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('unmount-chat', chatId);

    dispatch({
      type: TYPES.UNMOUNT_CHAT,
      payload: { chatId },
    });
  };
}
