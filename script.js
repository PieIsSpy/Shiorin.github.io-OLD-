var img = document.createElement('button');
img.setAttribute('src','cute shiorin.jpg');

const sounds = ['giggle1.mp3', 'giggle2.mp3', 'giggle3.mp3', 'giggle4.mp3', 'giggle5.mp3', 'giggle6.mp3', 'giggle7.mp3', 'giggle8.mp3', 'giggle9.mp3', 'giggle10.mp3', 'giggle11.mp3', 'giggle12.mp3'];

function randomGiggles() {
  const audioContent = Math.floor(Math.random() * sounds.length);
  const audio = new Audio(sounds[audioContent]);
  audio.play();
}
