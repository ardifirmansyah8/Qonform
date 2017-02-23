import React from 'react';
import {Link} from 'react-router';
// import {SingleDatePicker} from 'react-dates';
// import moment from 'moment';

const DetailRoom = () => {
  let img = require('../../assets/images/rooms/mj.jpg');

  // let locale = {
  //   format: 'YYYY-MM-DD',
  //   separator: ' - ',
  //   applyLabel: 'Apply',
  //   cancelLabel: 'Cancel',
  //   weekLabel: 'W',
  //   customRangeLabel: 'Custom Range',
  //   daysOfWeek: moment.weekdaysMin(),
  //   monthNames: moment.monthsShort(),
  //   firstDay: moment.localeData().firstDayOfWeek(),
  // };

  return (
    <div className="detail-room">
      <h1>MJ ROOM</h1>
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div className="panel panel-default">
            <img src={img} className="detail-room" role="presentation" />
          </div>
          <h4>Facilities</h4>
          <div className="panel panel-default">
            <div className="panel-body">
              <ul className="list-feature">
                <li>Free Wi-Fi throughout</li>
                <li>Video and telephone conferencing</li>
                <li>Ceiling mounted projector and screen</li>
                <li>Data and voice connection points</li>
                <li>Integrated sound system</li>
                <li>Panel display system</li>
                <li>White board and flip charts</li>
                <li>Ergonomic chairs and glare-proof tables</li>
                <li>Adjustable lighting</li>
                <li>Capacity up to 12 person</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div>
            <h4>Next Agenda<Link to=""><span className="pull-right">All Today Agenda</span></Link></h4>
            <div className="panel panel-default">
              <div className="panel-body">
                <h4>Sept 2, 2016 09:00-12:00AM</h4>
                <h5>BOD Meeting - Annisa (HCM)</h5>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-body">
                <h4>Sept 2, 2016 12:00-14:00PM</h4>
                <h5>HPE Monthly Progress Meeting - Toto (Marketing)</h5>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-body">
                <h4>Sept 2, 2016 14:00-16:00PM</h4>
                <h5>Meeting With Bank Mandiri - Erwin (Finance)</h5>
              </div>
            </div>
          </div>
          <div>
            <h4>Book Room</h4>
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="fullName" className="col-sm-4 control-label">Full Name:</label>
                    <div className="col-sm-8">
                      <input name="fullName" type="text" className="form-control" placeholder="Input full name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="col-sm-4 control-label">Email:</label>
                    <div className="col-sm-8">
                      <input name="email" type="email" className="form-control" placeholder="Input email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="directorate" className="col-sm-4 control-label">Directorate:</label>
                    <div className="col-sm-8">
                      <select name="directorate" className="form-control" defaultValue="">
                        <option value="" disabled>Select your directorate</option>
                        <option value="marketing">Marketing</option>
                        <option value="operation">Operation</option>
                        <option value="it">IT</option>
                        <option value="hc">HC & Corp. Services</option>
                        <option value="finance">Finance & Accounting</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="meetingName" className="col-sm-4 control-label">Meeting Name:</label>
                    <div className="col-sm-8">
                      <input name="meetingName" type="text" className="form-control" placeholder="Input meeting name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date" className="col-sm-4 control-label">Date:</label>
                    <div className="col-sm-8">
                      {/*<SingleDatePicker />*/}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRoom;
