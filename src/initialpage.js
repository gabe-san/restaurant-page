import Poe from './poe.jpg';

function header() {
  const h1 = document.createElement('h1');
  h1.textContent = 'Wraeclast Kitchen';
  const landingPage = document.querySelector('#content');
  landingPage.appendChild(h1);
}

function image() {
  const img = document.createElement('img');
  img.src = Poe;
  const landingPage = document.querySelector('#content');
  landingPage.appendChild(img);
}

function headliner() {
  const p = document.createElement('p');
  p.textContent = `"The food was delicious and the service was top-notch. I highly
recommend this restaurant to anyone looking for a great meal and a
wonderful experience.”`;
  const landingPage = document.querySelector('#content');
  landingPage.appendChild(p);
}

export {
  header,
  image,
  headliner

};


