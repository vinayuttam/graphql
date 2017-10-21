import * as ActionTypes from './ActionTypes';
import { history } from '../store';
import Auth from '../auth';

export function loginSuccess() {
  return { type: ActionTypes.LOGIN_SUCCESS }
};

export function loginUser(user) {
  return function(dispatch) {
    if (user.token !== null) {
      sessionStorage.setItem('token', user.token)
      history.push('/dashboard');
      return dispatch(loginSuccess());
    } else {
      history.push('/login')
    }
  }
}

export function logoutUser() {
  Auth.logout();
  history.push('/');
  return { type: ActionTypes.LOGOUT }
}
