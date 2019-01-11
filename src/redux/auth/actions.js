import TYPES from './constants';
import callApi from '../../utils/call-api';

export function signup(username, password) {
  return (disptach, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.signup) {
      return Promise.resolve();
    }
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
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.login) {
      return Promise.resolve();
    }
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

export function recieveAuth() {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.recieveAuth) {
      return Promise.resolve();
    }
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

export function editUser({ username, firstName, lastName }) {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    const { isFetching } = getState().services;

    if (isFetching.editUser) {
      return Promise.resolve();
    }

    dispatch({
      type: TYPES.EDIT_USER_REQUEST
    })

    return callApi('/users/me', token, { method: 'POST' }, {
      data: { username, firstName, lastName }
    })
      .then(json => {
        return dispatch({
          type: TYPES.EDIT_USER_SUCCESS,
          payload: json,
        })
      }
        )
      .catch(reason => dispatch({
        type: TYPES.EDIT_USER_FAILURE,
        payload: reason,
      }));
  };
};

export function logout() {
  return (dispatch, getState) => {

    const { isFetching } = getState().services;

    if (isFetching.logout) {
      return Promise.resolve();
    }
    dispatch({
      type: TYPES.LOGOUT_REQUEST
    });

    return callApi('/logout')
      .then(json => {
        localStorage.removeItem('token');
        dispatch({
          type: TYPES.LOGOUT_SUCCESS,
          payload: json
        })
      })
      .catch(reason => dispatch({
        type: TYPES.LOGOUT_FAILURE,
        payload: reason,
      }));
  };
}

