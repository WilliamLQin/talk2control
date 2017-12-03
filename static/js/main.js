var speech = new p5.SpeechRec();
var btn = document.getElementById('btn-1');
var text = document.getElementById('keyword');

function initializeSpeechRec() {

  speech.onResult = this.showResult; // bind callback function to trigger when speech is recognized
  speech.continuous = true;
  speech.interimResults = true;
  // speech.start();
}

function startSpeechRec() {
  // start listening
  speech.start();
  btn.innerText = "Listening...";
}

function showResult() {
  var speechResult = speech.resultString;
  speechWords = speechResult.split(' ');
  speechResult = speechWords[speechWords.length - 1];
  console.log(speechResult); // log the result
  if (speechResult === text.value) {
    simulateKeyPress();
  }
}

initializeSpeechRec();
btn.onclick = function () {
  startSpeechRec();
}
