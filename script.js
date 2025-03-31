let audioContext = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: 'interactive' });
let oscillatorR, oscillatorL, panNodeR, panNodeL, gainNodeR, gainNodeL;

function createOscillator(frequency, frequencyDiff) { 
  if (oscillatorR && oscillatorL) {
    oscillatorR.stop();
    oscillatorL.stop();
    oscillatorR.disconnect();
    oscillatorL.disconnect();
  }

  oscillatorR = audioContext.createOscillator();
  oscillatorL = audioContext.createOscillator();
  oscillatorR.type = 'sine';
  oscillatorL.type = 'sine';
  oscillatorR.frequency.value = frequency;
  oscillatorL.frequency.value = frequencyDiff;

  gainNodeR = audioContext.createGain();
  gainNodeR.gain.value = parseInt(document.getElementById("volumeR").value) / 100;
  gainNodeL = audioContext.createGain();
  gainNodeL.gain.value = parseInt(document.getElementById("volumeL").value) / 100;

  panNodeR = audioContext.createStereoPanner();
  panNodeL = audioContext.createStereoPanner();
  panNodeR.pan.value = 1;
  panNodeL.pan.value = -1;

  oscillatorR.connect(gainNodeR).connect(panNodeR).connect(audioContext.destination);
  oscillatorL.connect(gainNodeL).connect(panNodeL).connect(audioContext.destination);
}

function startTone() {
  if (!oscillatorR || oscillatorR.context.state === 'closed' && !oscillatorL || oscillatorL.context.state === 'closed') {
    let frequency = document.getElementById("freqInput").value;
    let frequencyDiff = document.getElementById("diffInput").value;
    createOscillator(frequency, parseInt(frequency) + parseInt(frequencyDiff));
  }
  oscillatorR.start();
  oscillatorL.start();
}

function stopTone() {
  if (oscillatorR && oscillatorL) {
    oscillatorR.stop();
    oscillatorL.stop();
    oscillatorR = null;
    oscillatorL = null;
  }
}

function restartTone() {
  stopTone();
  startTone();
}