import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import chats from '../chats/reducers';

export default combineReducers({
  auth,
  chats,
})
