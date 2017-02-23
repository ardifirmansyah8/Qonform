import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const Room = ({room}) => {
  let img = require('../../assets/images/rooms/' + room.photo) ;

  return (
    <div className="col-sm-12 col-md-4">
      <Link to={"/detailroom/" + room.id}>
        <div className="panel panel-default card">
          <img src={img} className="img-rooms" role="presentation" />
          <div className="panel-body">
            <h5>{room.roomName}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

Room.propTypes = {
  room: PropTypes.object.isRequired,
};

export default Room;
