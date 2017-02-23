// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';

const App = ({children}) => {
  return (
    <div className="container-fluid">
      <Header />
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
