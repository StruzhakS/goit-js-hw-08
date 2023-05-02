const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(reloadPlay, 1000));

function reloadPlay(ev) {
  const currentSeconds = ev.seconds;
  console.log(currentSeconds);
  localStorage.setItem('videoplayer-current-time', currentSeconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
