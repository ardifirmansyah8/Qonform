import React, { PropTypes } from 'react';
import Room from './Room';

const RoomList = ({rooms}) => {
  return (
    <div className="row">
      {rooms.map(room =>
        <Room
          key={room.id}
          room={room}
        />
      )}
    </div>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array.isRequired,
};

export default RoomList;
