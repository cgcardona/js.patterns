var audioContext = new webkitAudioContext();
var audioOscillator = audioContext.createOscillator();
var audioOscillator2 = audioContext.createOscillator();

var cMaj = [261.626, 293.665, 329.628, 349.228, 391.995, 440, 493.883, 523.251];
setInterval(function() {
    audioOscillator.type = Math.floor((Math.random() * 3));
    audioOscillator.frequency.value = cMaj[Math.floor((Math.random() * Math.floor((Math.random() * (cMaj.length - 1)))))];
    audioOscillator2.type = Math.floor((Math.random()*  3));
    udioOscillator2.frequency.value = cMaj[Math.floor((Math.random() * Math.floor((Math.random() * (cMaj.length - 1)))))];
    }, 500);

audioOscillator.connect(audioContext.destination);
audioOscillator.start(0);
audioOscillator2.connect(audioContext.destination);
audioOscillator2.start(0);
