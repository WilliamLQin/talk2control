import React from 'react';
import ReactDOM from 'react-dom';

// import Speech from './main.js';

class Recorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Say something',
      empty: true,
      foo: null
    }
  }

  startRecording() {
    console.log('hi');
  }

  render() {
    return (
      <div id="recorder">
        <p>Record Keyword Command</p>
        <button onClick={this.startRecording.bind(this)}>Record</button>
        <textarea class="text-area" defaultValue={this.state.text} />
      </div>
    )
  }
}

export default Recorder;
