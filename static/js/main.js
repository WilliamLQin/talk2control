var speech = new p5.SpeechRec();
var btn = document.getElementById('btn-1');

function initializeSpeechRec() {

  speech.onResult = this.showResult; // bind callback function to trigger when speech is recognized
  speech.continuous = true;
  speech.interimResults = true;
  // speech.start();
}

function startSpeechRec() {
  // start listening
  speech.start();
}

function stopSpeechRec() {
  speech.stop();
}

function showResult() {
  console.log(speech.resultString); // log the result
}

initializeSpeechRec();
btn.onclick = function () {
  startSpeechRec();
}
