var img = document.createElement('button');
img.setAttribute('src','cute shiorin.jpg');

const sounds = ['giggle1', 'giggle2', 'giggle3', 'giggle4', 'giggle5', 'giggle6', 'giggle7', 'giggle8', 'giggle9', 'giggle10', 'giggle11', 'giggle12'];

function arrayLength(giggle) {
  return [rand(0, sounds.length];
}

document.querySelector('#button').addEventListener('click', function giggle(sounds) {
  min = Math.ceil(1);
  max = Math.floor(12);
  return Math.floor(Math.random() * (max - min + 1) + min);
  const soundToPlay = rand(0,12) === 0 ? arrayLength(sounds);
  var audio - new Audio('Cute Shiorin Giggles/' + soundToPlay);
  audio.play();
})
