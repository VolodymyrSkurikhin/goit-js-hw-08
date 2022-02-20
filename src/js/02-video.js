import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const timeToResume = JSON.parse(localStorage.getItem("videoplayer-current-time") || 0);
player.setCurrentTime(timeToResume);

player.on('timeupdate', throttle(getTime,1000));
  
function getTime(event) {
  if (event.percent === 1) {
    localStorage.removeItem("videoplayer-current-time")
   return 
  }
    localStorage.setItem("videoplayer-current-time", event.seconds)
    console.log(event);
};


