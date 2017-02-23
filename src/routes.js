import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import RoomsPage from './components/rooms/RoomsPage';
import DetailRoom from './components/detailroom/DetailRoom';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="rooms" component={RoomsPage} />
    <Route path="detailroom/:id" component={DetailRoom} />
    <Route path="about" component={AboutPage} />
  </Route>
);
