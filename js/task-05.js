const refs = {
    nameInput: document.getElementById('name-input'),
    nameOutput: document.getElementById('name-output'),
}

refs.nameInput.addEventListener('input', onChangeInput);

function onChangeInput(event) {
    if(event.currentTarget.value === '') {
        refs.nameOutput.textContent = 'Anonymous';
    } else(refs.nameOutput.textContent = event.currentTarget.value)
}

