/***
Notes:
Length: 102 minutes and 54 seconds - 6174 seconds
***/

var arbitraryDate = 1481497158032;
var video = document.getElementById('bgvid');

var calcPlaytime = function() {
  var currentTime = Date.now();
  var elapsedTime = currentTime - arbitraryDate;
  var elapsedInSeconds = elapsedTime / 1000;
  var playTime = elapsedInSeconds % 6174;

  return playTime;
};

var hideLogo = function() {
  document.getElementById('logo').setAttribute('style', 'display:none');
};

video.addEventListener('loadedmetadata', function() {
  this.currentTime = calcPlaytime();
  video.play();

  setTimeout(hideLogo, 30000);
}, false);