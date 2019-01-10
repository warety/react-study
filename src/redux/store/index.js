import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import auth from '../auth/reducers';

export default function configureStore() {
  return createStore(
    combineReducers({
      auth,
    }),
    applyMiddleware(
      thunkMiddleware
    )
  )
}
