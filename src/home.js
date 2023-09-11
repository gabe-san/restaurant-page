import Poe from '../dist/images/poe.jpg';

export function header() {
  const h1 = document.createElement('h1');
  h1.textContent = 'Wraeclast Kitchen';
  return h1;
}

export function image() {
  const img = document.createElement('img');
  img.src = Poe;
  return img;
}

export function headliner() {
  const p = document.createElement('p');
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


