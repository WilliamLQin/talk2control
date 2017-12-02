var speech;

function initializeSpeechRec() {
  speech = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
  speech.onResult = showResult; // bind callback function to trigger when speech is recognized
  speech.continuous = true;
  speech.interimResults = true;
}

function startSpeechRec() {
  speech.start(); // start listening
}

function stopSpeechRec() {
  speech.stop();
}

function showResult() {
   console.log(speech.resultString); // log the result
}

initializeSpeechRec();
startSpeechRec();
