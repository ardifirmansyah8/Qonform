import * as types from '../actions/actionTypes';

export default function roomReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_ROOMS_SUCCESS:
      return action.rooms;

    default:
      return state;
  }
}
