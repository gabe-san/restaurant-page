import loadContactInfo from './contact';
import loadMenuInfo from './menu';
import { loadHome } from './home';

function createNav() {
  const nav = document.createElement('div');
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

function initializeNavBar() {
  const navBarIni = document.createElement('div');
  const contentReference = document.querySelector('#content');
  navBarIni.appendChild(createNav());
  contentReference.appendChild(navBarIni);
}

export default initializeNavBar;

export function switchContact() {
  const contactButtonEvent = document.querySelector('.contactEvent');
  contactButtonEvent.addEventListener('click', () => {
    loadContactInfo();

  })
}
export function switchMenu() {
  const menuButtonEvent = document.querySelector('.menuEvent');
  menuButtonEvent.addEventListener('click', () => {
    loadMenuInfo();
  })
}

export function switchHome() {
  const homeButtonEvent = document.querySelector('.homeEvent');
  homeButtonEvent.addEventListener('click', () => {
    loadHome();
  })
}