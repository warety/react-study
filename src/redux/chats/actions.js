import TYPES from './constants';
import callApi from '../../utils/call-api';
import { redirect } from '../services/actions';

export function fetchAllChats() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    const { isFetching } = getState().services;

    if (isFetching.allChats) {
      return Promise.resolve();
    }
    dispatch({
      type: TYPES.FETCH_ALL_CHATS_REQUEST,
    });

    return callApi('/chats', token)
      .then(data => dispatch({
        type: TYPES.FETCH_ALL_CHATS_SUCCESS,
        payload: data,
      }))
      .catch(error => dispatch({
        type: TYPES.FETCH_ALL_CHATS_FAILURE,
        payload: error,
      }));
  };
}

export function fetchMyChats() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    const { isFetching } = getState().services;

    if (isFetching.myChats) {
      return Promise.resolve();
    }
    dispatch({
      type: TYPES.FETCH_MY_CHATS_REQUEST,
    });

    return callApi('/chats/my', token)
      .then(data => dispatch({
        type: TYPES.FETCH_MY_CHATS_SUCCESS,
        payload: data,
      }))
      .catch(error => dispatch({
        type: TYPES.FETCH_MY_CHATS_FAILURE,
        payload: error,
      }));
  };
}

export function fetchChat(chatId) {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    const { isFetching } = getState().services;

    if (isFetching.chat) {
      return Promise.resolve();
    }
    dispatch({
      type: TYPES.FETCH_CHAT_REQUEST,
    });

    return callApi(`/chats/${chatId}`, token)
      .then((data) => {
        dispatch({
          type: TYPES.FETCH_CHAT_SUCCESS,
          payload: data,
        });

        return data;
      })
      .catch(error => dispatch({
        type: TYPES.FETCH_CHAT_FAILURE,
        payload: error,
      }));
  };
}

export function setActiveChat(chatId) {
  return dispatch => dispatch(fetchChat(chatId)).then((data) => {
    if (!data) {
      dispatch(redirect('/chat'));

      return dispatch({
        type: TYPES.UNSET_ACTIVE_CHAT,
      });
    }
    return dispatch({
      type: TYPES.SET_ACTIVE_CHAT,
      payload: data,
    });
  });
}

export function createChat(title) {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    const { isFetching } = getState().services;

    if (isFetching.createChat) {
      return Promise.resolve();
    }

    dispatch({
      type: TYPES.CREATE_CHAT_REQUEST,
      payload: { title },
    });

    return callApi(
      '/chats',
      token,
      { method: 'POST' },
      {
        data: { title },
      },
    )
      .then(({ chat }) => {
        dispatch({
          type: TYPES.CREATE_CHAT_SUCCESS,
          payload: { chat },
        });

        dispatch(redirect(`/chat/${chat._id}`));

        return chat;
      })
      .catch(reason => dispatch({
        type: TYPES.CREATE_CHAT_FAILURE,
        payload: reason,
      }));
  };
}

export function deleteChat(chatId) {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    const { isFetching } = getState().services;

    if (isFetching.deleteChat) {
      return Promise.resolve();
    }

    dispatch({
      type: TYPES.DELETE_CHAT_REQUEST,
      payload: { chatId },
    });

    return callApi(`/chats/${chatId}`, token, { method: 'DELETE' })
      .then((data) => {
        dispatch({
          type: TYPES.DELETE_CHAT_SUCCESS,
          payload: data,
        });

        dispatch(redirect('/chat'));

        dispatch({
          type: TYPES.UNSET_ACTIVE_CHAT,
        });

        return data;
      })
      .catch(reason => dispatch({
        type: TYPES.DELETE_CHAT_FAILURE,
        payload: reason,
      }));
  };
}

export function joinChat(chatId) {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    const { isFetching } = getState().services;

    if (isFetching.joinChat) {
      return Promise.resolve();
    }

    dispatch({
      type: TYPES.JOIN_CHAT_REQUEST,
      payload: { chatId },
    });

    return callApi(`/chats/${chatId}/join`, token)
      .then(({ chat }) => {
        dispatch({
          type: TYPES.JOIN_CHAT_SUCCESS,
          payload: { chat },
        });

        dispatch(redirect(`/chat/${chat._id}`));

        return chat;
      })
      .catch(reason => dispatch({
        type: TYPES.JOIN_CHAT_FAILURE,
        payload: reason,
      }));
  };
}

export function leaveChat(chatId) {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    const { isFetching } = getState().services;

    if (isFetching.leaveChat) {
      return Promise.resolve();
    }

    dispatch({
      type: TYPES.LEAVE_CHAT_REQUEST,
      payload: { chatId },
    });

    return callApi(`/chats/${chatId}/leave`, token)
      .then((data) => {
        dispatch({
          type: TYPES.LEAVE_CHAT_SUCCESS,
          payload: data,
        });

        dispatch(redirect('/chat'));

        dispatch({
          type: TYPES.UNSET_ACTIVE_CHAT,
        });

        return data;
      })
      .catch(reason => dispatch({
        type: TYPES.LEAVE_CHAT_FAILURE,
        payload: reason,
      }));
  };
}
