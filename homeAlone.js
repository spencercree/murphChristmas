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

window.addEventListener('keydown', function(event){
  if(event.keyCode === 83){
    video.currentTime = 0;
  }
});

video.querySelectorAll('source')[0].addEventListener('error', function(){
  document.getElementById('error').setAttribute('style', 'display:inline-block');
});

var hideLogo = function() {
  document.getElementById('logo').setAttribute('style', 'display:none');
};

var watch = function() {
  document.getElementById('message').setAttribute('style', 'opacity:0');
  video.volume = 1;
}

video.addEventListener('loadedmetadata', function() {
  this.currentTime = calcPlaytime();
  video.play();

  setTimeout(hideLogo, 30000);
}, false);

//changes sync icon
var i = setInterval(function() {
  if(video.readyState > 0) {

    setTimeout(function(){
      document.getElementById('sync-icon').setAttribute('style', 'background-color:#f44336');
      document.getElementById('sync-icon').innerHTML = 'WATCH';
      document.getElementById('bgvid').setAttribute('style', 'opacity:1');
    }, 3000);

    clearInterval(i);
  }
}, 200);