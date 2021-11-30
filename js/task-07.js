const refs = {
    inputEl: document.getElementById('font-size-control'),
    spanEl: document.getElementById('text'),
}


refs.inputEl.addEventListener('input', onChangeInput);

function onChangeInput(event) {
    if(event.currentTarget.value) {
        refs.spanEl.style.fontSize = `${event.currentTarget.value}px`;
        console.log(event.currentTarget.value);
    }
}

