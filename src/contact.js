import Kurai from '../dist/images/Kurai.png';

function contactInfo() {
  const divContact = document.createElement('div');
  divContact.classList.add('contactInfoDiv')

  const contactHeader = document.createElement('h1');
  contactHeader.classList.add('contactHeader');
  contactHeader.textContent = 'Contact Us';

  const contactImage = document.createElement('img');
  contactImage.classList.add('contactImage')
  contactImage.src = Kurai;

  const contactName = document.createElement('div');
  contactName.classList.add('contactName');
  contactName.textContent = 'Kurai';

  const contactTitle = document.createElement('div');
  contactTitle.classList.add('contactTitle');
  contactTitle.textContent = 'Chef and Manager'

  const contactNumber = document.createElement('div');
  contactNumber.classList.add('contactNumber');
  contactNumber.textContent = '555-DONT-BOTHER'

  const contactEmail = document.createElement('div');
  contactEmail.classList.add('contactEmail');
  contactEmail.textContent = 'definitelyWillReply@fakeemail.com'

  divContact.appendChild(contactHeader);
  divContact.appendChild(contactImage);
  divContact.appendChild(contactName);
  divContact.appendChild(contactTitle);
  divContact.appendChild(contactNumber);
  divContact.appendChild(contactEmail);

  return divContact;
}
function loadContactInfo() {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(contactInfo());

}
export default loadContactInfo;