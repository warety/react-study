import TYPES from './constants';
import history from '../../utils/history';

// eslint-disable-next-line
export function redirect(to) {
  return (dispatch) => {
    history.push(to);
    dispatch({
      type: TYPES.REDIRECT,
      payload: { to },
    });
  };
}
