import TYPES from './constants';
import history from '../../utils/history';

export function redirect(to) {
  return (dispatch) => {
    history.push(to);
    dispatch({
      type: TYPES.REDIRECT,
      payload: { to },
    });
  }
}
