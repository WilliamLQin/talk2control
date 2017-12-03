import React from 'react';
import ReactDOM from 'react-dom';

// import Speech from './main.js';

class Recorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Say something',
      empty: true,
      count: 0,
      speech: null
    }
  }

  startRecording(foo) {
    // foo.start();
    console.log(foo);
  }

  render() {
    return (
      <div id="recorder">
        <p>Record Keyword Command</p>
        <button id="btn-1" onClick={function () {
        }}>Record</button>
        <br></br>
        <textarea className="text-area" defaultValue={this.state.text} />
      </div>
    )
  }
}

export default Recorder;
