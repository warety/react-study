import TYPES from './constants';

export function signup(username, password) {
  return (disptach) => {
    disptach({
      type: TYPES.SIGNUP_REQUEST
    })

    return fetch('http://localhost:8000/v1/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          return json
        }

        throw new Error(json.message);
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
  return (disptach) => {
    disptach({
      type: TYPES.LOGIN_REQUEST
    })

    return fetch('http://localhost:8000/v1/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          return json
        }

        throw new Error(json.message);
      })
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!!!')
        }
        localStorage.setItem('token', json.token)
        return disptach({
          type: TYPES.LOGIN_SUCCESS,
          payload: json,
        })
      })
      .catch(error => disptach({
        type: TYPES.LOGIN_FAILURE,
        payload: error,
      }))
  };
}


export function logout() {
  return (disptach) => {
    disptach({
      type: TYPES.LOGOUT_REQUEST
    })
  };
}

