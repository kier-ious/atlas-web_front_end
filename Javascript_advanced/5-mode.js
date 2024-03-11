function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let dark = changeMode(12, 'bold', 'capitalized', 'black', 'white');
  let scream = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  let paragraph = document.createElement('p');
  paragraph.innerHTML = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  let spookyButton = document.createElement('button');
  spookyButton.innerHTML = 'Spooky';
  spookyButton.addEventListener('click', spooky);
  document.body.append(spookyButton);

  let darkModeButton = document.createElement('button');
  darkModeButton.innerHTML = 'Dark Mode';
  darkModeButton.addEventListener('click', dark);
  document.body.append(darkModeButton);

  let screamModeButton = document.createElement('button');
  screamModeButton.innerHTML = 'Scream Mode';
  screamModeButton.addEventListener('click', scream);
  document.body.append(screamModeButton);
}

main();
