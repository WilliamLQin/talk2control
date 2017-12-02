import React from 'react';
import ReactDOM from 'react-dom';

import Recorder from './Recorder.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header">
          <div id="imageHead">
            <img src="../t2c.png"/>
          </div>
          <div id="desc">
            <span className="subFont">Control your screen with voice recognition and filters for seamless presentations and smooth navigation.</span>
          </div>
          <h3 className="titleFont">Command to Keyword</h3>
          <Recorder />
      </div>
    )
  }
}

export default App;
