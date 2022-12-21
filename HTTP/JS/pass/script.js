let password = 'admin';

let passwordButton = document.querySelector('.password-button');
let hideButton = document.querySelector('.hide-button');

let hiddenPart = document.querySelector('.wrapper');

passwordButton.addEventListener('click', () => {
  let userInput = prompt('Password?', '');
  if (userInput == password) {
    hiddenPart.classList.remove('hidden');
  }
});

hideButton.addEventListener('click', () => {
  hiddenPart.classList.add('hidden');
});