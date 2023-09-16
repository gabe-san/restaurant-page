import Poe from '../dist/images/poe.jpg';

function header() {
  const h1 = document.createElement('h1');
  h1.classList.add('homeTitle');

  h1.textContent = 'Wraeclast Kitchen';
  return h1;
}

function image() {
  const img = document.createElement('img');
  img.classList.add('homeImg');
  img.src = Poe;
  return img;
}

function headliner() {
  const p = document.createElement('p');
  p.classList.add('homeP');
  p.textContent = `"The food was delicious and the service was top-notch. I highly
recommend this restaurant to anyone looking for a great meal and a
wonderful experience.”`;
  return p
}

export default function loadHome() {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(header());
  main.appendChild(image());
  main.appendChild(headliner());
}


