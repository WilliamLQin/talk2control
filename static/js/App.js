import React from 'react';
import ReactDOM from 'react-dom';

import Recorder from './Recorder.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="container">
        <h1>Talk To Control</h1>
        <h3>Command to Keyword</h3>
        <div id="recorder">
          <p>Record Keyword Command</p>
          <button id="btn-1" onClick={function () {
          }}>Record</button>
          <textarea class="text-area" />
        </div>
      </div>
    )
  }
}

export default App;
