const throttle = require('lodash.throttle');
let currentSeconds = null;
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(reloadPlay, 1000));
// player.on('play', throttle(reloadPlay, 1000));

function reloadPlay(ev) {
  currentSeconds = ev.seconds;
  localStorage.setItem('videoplayer-current-time', currentSeconds);
  console.log(currentSeconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// player.off('play', function (ev) {
//   //   ev.seconds = localStorage.getItem('videoplayer-current-time');
//   console.log(ev);
// });
