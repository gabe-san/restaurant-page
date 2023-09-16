import loadContactInfo from './contact';
import loadMenuInfo from './menu';
import loadHome from './home';

function createNav() {
  const nav = document.createElement('div');
  nav.classList.add('navbuttons');
  const homeButton = document.createElement('button');
  homeButton.classList.add('homeEvent');
  homeButton.textContent = 'Home';
  const menuButton = document.createElement('button');
  menuButton.classList.add('menuEvent');
  menuButton.textContent = 'Menu';
  const contactButton = document.createElement('button');
  contactButton.classList.add('contactEvent');
  contactButton.textContent = 'Contact';

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

export function switchContact() {
  const contactButtonEvent = document.querySelector('.contactEvent');
  contactButtonEvent.addEventListener('click', () => {
    loadContactInfo();
    document.querySelector('.homeEvent').style.borderBottom = '';
  })
}
export function switchMenu() {
  const menuButtonEvent = document.querySelector('.menuEvent');
  menuButtonEvent.addEventListener('click', () => {
    document.querySelector('.homeEvent').style.borderBottom = '';
    loadMenuInfo();
  })
}

export function switchHome() {
  const homeButtonEvent = document.querySelector('.homeEvent');
  homeButtonEvent.addEventListener('click', () => {
    loadHome();

  })
}

export default function initializePage() {
  const navBarIni = document.createElement('div');
  navBarIni.classList.add('navbar');
  const contentReference = document.querySelector('#content');
  navBarIni.appendChild(createNav());
  contentReference.appendChild(navBarIni);

  const main = document.createElement('div');
  main.classList.add('main');
  contentReference.appendChild(main);
  loadHome();
  document.querySelector('.homeEvent').style.borderBottom = 'solid';

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.textContent = 'All assets credited to PoEWiki.net'
  contentReference.appendChild(footer);

}
