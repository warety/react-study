const TYPES = {
  SIGNUP_REQUEST: Symbol('SIGNUP_REQUEST'),
  SIGNUP_SUCCESS: Symbol('SIGNUP_SUCCESS'),
  SIGNUP_FAILURE: Symbol('SIGNUP_FAILURE'),

  LOGIN_REQUEST: Symbol('LOGIN_REQUEST'),
  LOGIN_SUCCESS: Symbol('LOGIN_SUCCESS'),
  LOGIN_FAILURE: Symbol('LOGIN_FAILURE'),

  LOGOUT_REQUEST: Symbol('LOGOUT_REQUEST'),
  LOGOUT_SUCCESS: Symbol('LOGOUT_SUCCESS'),
  LOGOUT_FAILURE: Symbol('LOGOUT_FAILURE'),

  RECIEVE_AUTH_REQUEST: Symbol('RECIEVE_AUTH_REQUEST'),
  RECIEVE_AUTH_SUCCESS: Symbol('RECIEVE_AUTH_SUCCESS'),
  RECIEVE_AUTH_FAILURE: Symbol('RECIEVE_AUTH_FAILURE'),

  EDIT_USER_REQUEST: Symbol('EDIT_USER_REQUEST'),
  EDIT_USER_SUCCESS: Symbol('EDIT_USER_SUCCESS'),
  EDIT_USER_FAILURE: Symbol('EDIT_USER_FAILURE'),
};

export default TYPES;
