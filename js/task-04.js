let valueEl = document.getElementById('value');
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');


decrementBtn.addEventListener('click', onDecrementBtnClick);

incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(event) {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

function onIncrementBtnClick(event) {
    counterValue += 1;
    valueEl.textContent = counterValue;
};


