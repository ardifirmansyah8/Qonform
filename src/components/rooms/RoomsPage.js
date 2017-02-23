import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import * as roomActions from '../../actions/roomActions';
import RoomList from './RoomList';

class RoomsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { rooms } = this.props;

    return (
      <div>
        <h2>Meeting Rooms</h2>
        <RoomList rooms={rooms} />
      </div>
    );
  }
}

RoomsPage.propTypes = {
  rooms: PropTypes.array.isRequired,
  // actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    rooms: state.rooms
  };
}

export default connect(mapStateToProps)(RoomsPage);
