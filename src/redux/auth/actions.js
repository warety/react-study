import TYPES from './constants';
import callApi from '../../utils/call-api';

export function signup(username, password) {
  return (disptach) => {
    disptach({
      type: TYPES.SIGNUP_REQUEST
    })

    return callApi('/signup', undefined, { method: 'POST' }, {
      username,
      password,
    })
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!!!')
        }

        localStorage.setItem('token', json.token)

        return disptach({
          type: TYPES.SIGNUP_SUCCESS,
          payload: json,
        })
      })
      .catch(error => disptach({
        type: TYPES.SIGNUP_FAILURE,
        payload: error,
      }))
  };
}


export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: TYPES.LOGIN_REQUEST
    })

    return callApi('/login', undefined, { method: 'POST' }, {
      username,
      password,
    })
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!!!')
        }
        localStorage.setItem('token', json.token)
        return dispatch({
          type: TYPES.LOGIN_SUCCESS,
          payload: json,
        })
      })
      .catch(error => dispatch({
        type: TYPES.LOGIN_FAILURE,
        payload: error,
      }))
  };
}


export function logout() {
  return (dispatch) => {
    dispatch({
      type: TYPES.LOGOUT_REQUEST
    })
  };
}

export function recieveAuth() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch({
      type: TYPES.RECIEVE_AUTH_REQUEST,
    })

    return callApi('/users/me', token,)
      .then(json => dispatch({
        type: TYPES.RECIEVE_AUTH_SUCCESS,
        payload: json,
      }))
      .catch(reason => dispatch({
        type: TYPES.RECIEVE_AUTH_FAILURE,
        payload: reason,
      }));
  }
}

