import TYPES from './constants';
import callApi from '../../utils/call-api';
import { redirect } from '../services/actions';

export function fetchAllChats() {
  return (dispatch, getState) => {
    const { token } = getState().auth
    dispatch({
      type: TYPES.FETCH_ALL_CHATS_REQUEST,
    })

    return callApi('/chats', token)
      .then(data => dispatch({
        type: TYPES.FETCH_ALL_CHATS_SUCCESS,
        payload: data
      }))
      .catch(error => dispatch({
        type: TYPES.FETCH_ALL_CHATS_FAILURE,
        payload: error
      }))
  }
}



export function fetchMyChats() {
  return (dispatch, getState) => {
    const { token } = getState().auth
    dispatch({
      type: TYPES.FETCH_MY_CHATS_REQUEST,
    })

    return callApi('/chats/my', token)
      .then(data => dispatch({
        type: TYPES.FETCH_MY_CHATS_SUCCESS,
        payload: data
      }))
      .catch(error => dispatch({
        type: TYPES.FETCH_MY_CHATS_FAILURE,
        payload: error
      }))
  }
}

export function fetchChat(chatId) {
  return (dispatch, getState) => {
    const { token } = getState().auth
    dispatch({
      type: TYPES.FETCH_CHAT_REQUEST,
    })

    return callApi(`/chats/${chatId}`, token)
      .then(data => {
        dispatch({
          type: TYPES.FETCH_CHAT_SUCCESS,
          payload: data
        });

        return data
      })
      .catch(error => dispatch({
        type: TYPES.FETCH_CHAT_FAILURE,
        payload: error
      }))
  }
}

export function setActiveChat(chatId) {
  return (dispatch, getState) => {
    return dispatch(fetchChat(chatId))
      .then(data => {
        if (!data) {
          dispatch(redirect('/chat'));

          return dispatch({
            type: TYPES.UNSET_ACTIVE_CHAT,
          });
        }
        dispatch({
          type: TYPES.SET_ACTIVE_CHAT,
          payload: data,
        })
      })
  }
}
