import './style.css';
import initializeNavBar, { switchContact, switchHome, switchMenu } from './initialsite';
import initializePage from './home'

initializeNavBar();
initializePage();
switchContact();
switchMenu();
switchHome();