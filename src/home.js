import Poe from './poe.jpg';

function header() {
  const h1 = document.createElement('h1');
  h1.textContent = 'Wraeclast Kitchen';

  return h1;
}

function image() {
  const img = document.createElement('img');
  img.src = Poe;

  return img;
}

function headliner() {
  const p = document.createElement('p');
  p.textContent = `"The food was delicious and the service was top-notch. I highly
recommend this restaurant to anyone looking for a great meal and a
wonderful experience.”`;

  return p
}

export function loadHome() {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(header());
  main.appendChild(image());
  main.appendChild(headliner());
}

function initializePage() {
  const main = document.createElement('div');
  main.classList.add('main')
  const contentReference = document.querySelector('#content');
  main.appendChild(header());
  main.appendChild(image());
  main.appendChild(headliner());
  contentReference.appendChild(main);

}



export default initializePage;
