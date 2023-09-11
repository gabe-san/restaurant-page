import Kurai from '../dist/images/Kurai.png';

function contactInfo() {
  const divContact = document.createElement('div');
  divContact.textContent = 'Contact Us';

  const contactImage = document.createElement('img');
  contactImage.src = Kurai;

  const contactName = document.createElement('div');
  contactName.textContent = 'Kurai';

  const contactTitle = document.createElement('div');
  contactTitle.textContent = 'Chef and Manager'

  const contactNumber = document.createElement('div');
  contactNumber.textContent = '555-DONT-BOTHER'

  const contactEmail = document.createElement('div');
  contactEmail.textContent = 'definitelyWillReply@fakeemail.com'


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