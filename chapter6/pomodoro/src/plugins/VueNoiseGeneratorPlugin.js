import _ from 'underscore'

// Thanks to this great tutorial: http://noisehack.com/generate-noise-web-audio-api/
var audioContext, bufferSize, noise;
audioContext = new (window.AudioContext || window.webkitAudioContext)();

function generateWhiteNoise() {
  var noiseBuffer, output;

  bufferSize = 2 * audioContext.sampleRate;
  noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);

  output = noiseBuffer.getChannelData(0);
  _.times(bufferSize, i => {
    output[i] = Math.random() * 2 - 1;
  });

  noise = audioContext.createBufferSource();
  noise.buffer = noiseBuffer;
  noise.loop = true;
  noise.start(0);

  return noise;
}

function generatePinkNoise() {
  bufferSize = 4096;
  noise = (function() {
    var b0, b1, b2, b3, b4, b5, b6, node;
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
    node = audioContext.createScriptProcessor(bufferSize, 1, 1);
    node.onaudioprocess = function(e) {
      var output;

      output = e.outputBuffer.getChannelData(0);
      _.times(bufferSize, i => {
        var white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11; // (roughly) compensate for gain
        b6 = white * 0.115926;
      });
    };
    return node;
  })();

  return noise;
}

function generateBrownNoise() {
  bufferSize = 4096;

  noise = (function() {
    var lastOut, node;

    lastOut = 0.0;
    node = audioContext.createScriptProcessor(bufferSize, 1, 1);
    node.onaudioprocess = function(e) {
      var output = e.outputBuffer.getChannelData(0);
      _.times(bufferSize, i => {
        var white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; // (roughly) compensate for gain
      });
    };
    return node;
  })();

  return noise;
}

export default {
  install: function (Vue) {
    Vue.directive('noise', (value) => {
      console.log(value)
      var noise;

      switch (value) {
        case 'white':
        noise = generateWhiteNoise();
          break;
        case 'pink':
          noise = generatePinkNoise();
          break;
        case 'brown':
          noise = generateBrownNoise();
          break;
        default:
          noise = generateWhiteNoise();
      }
      noise.connect(audioContext.destination);
      audioContext.suspend();
    });
    Vue.noise = {
      start() {
        audioContext.resume();
      },
      pause() {
        audioContext.suspend();
      },
      stop() {
        audioContext.suspend();
      }
    }
  }
};
