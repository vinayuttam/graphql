import * as ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, userAuthenticated: !!sessionStorage.token };

    case ActionTypes.LOGOUT:
      return { ...state, error: '', userAuthenticated: !!sessionStorage.token };

    default:
      return state;
  }
}
