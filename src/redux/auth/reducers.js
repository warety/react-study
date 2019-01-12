import TYPES from './constants';

const token = localStorage.getItem('token');

const initialState = {
  isAuth: !!token,
  user: {},
  token,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.SIGNUP_SUCCESS:
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case TYPES.EDIT_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    case TYPES.RECIEVE_AUTH_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
      };
    case TYPES.SIGNUP_FAILURE:
    case TYPES.LOGIN_FAILURE:
    case TYPES.RECIEVE_AUTH_FAILURE:
    case TYPES.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        user: null,
        token: '',
      };
    default:
      return state;
  }
}
