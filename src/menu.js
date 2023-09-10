function createMenuItem(name, descriptor) {
  const menuItem = document.createElement('div');

  const foodName = document.createElement('h3');
  foodName.textContent = name;
  const foodDescriptor = document.createElement('p');
  foodDescriptor.textContent = descriptor;
  const foodImage = document.createElement('img');
  foodImage.src = `src/${name.toLowerCase()}.png`
  foodImage.alt = `${name}`;


  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescriptor);

  return menuItem;
}

function menuInfo() {
  const menu = document.createElement('div');
  menu.appendChild(
    createMenuItem(
      'Quickened Silver Ale',
      'Ethereal ginger ale bound to stimulate your senses.'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Elixir of Faith',
      'Award-winning craft beer infused with enough alcohol to incapacitate a large mammal.'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Saqawine Rhoa Roasted Venison',
      'Delectable roasted venison broiled overnight in special blend of spices and herbs.'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Craicic Grilled Squid',
      'Charcoal grilled squid dressed with lime and vinegar for a great contrast between savory, sweet, and sour.'
    )
  );
  return menu;
}

function loadMenuInfo() {
  const menuHeader = document.createElement('h1')
  menuHeader.textContent = 'Menu';
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(menuHeader);
  main.appendChild(menuInfo());
}

export default loadMenuInfo;