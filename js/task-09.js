const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

buttonEl.addEventListener('click', onChangeColorBackground);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function onChangeColorBackground(event) {

const color = getRandomHexColor();
bodyEl.style.backgroundColor = color;
spanEl.textContent = color;

}

