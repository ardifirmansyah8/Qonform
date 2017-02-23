import * as types from './actionTypes';
import roomApi from '../api/mockRoomApi';

export function loadRoomsSuccess(rooms) {
  return { type: types.LOAD_ROOMS_SUCCESS, rooms };
}

export function loadRooms() {
  return function(dispatch) {
    return roomApi.getAllRooms().then(rooms => {
      dispatch(loadRoomsSuccess(rooms));
    }).catch(error => {
      throw(error);
    });
  };
}
