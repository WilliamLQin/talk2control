class Speech extends React.Component {
  constructor
  initializeSpeechRec() {
    speech = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
    speech.onResult = showResult; // bind callback function to trigger when speech is recognized
    speech.continuous = true;
    speech.interimResults = true;
  }

  startSpeechRec() {
    speech.start(); // start listening
  }

  stopSpeechRec() {
    speech.stop();
  }

  showResult() {
     console.log(speech.resultString); // log the result
  }
};

export default Speech;

// initializeSpeechRec();
// startSpeechRec();
