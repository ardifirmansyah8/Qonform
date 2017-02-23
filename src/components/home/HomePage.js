import React from 'react';

const img = require('../../assets/images/qonform.png');

const HomePage = () => {
  return (
    <div className="jumbotron home-center">
      <div className="home-container">
        <img className="home-img" src={img} role="presentation" />
        <h3 className="home-subtitle">Meeting Room Booking System</h3>
        <div className="home-description">
          <h5>This application created and use to facilitate the meeting room
            reservation for internal circles of SML Technologies.</h5>
          <h5>For more information, please contact:</h5>
          <h5>techsupport@smltech.co.id</h5>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
