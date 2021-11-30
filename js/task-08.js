const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if(email === '') {
    return alert('Все поля должны быть заполнены');
  }

  if(password === '') {
    return alert('Все поля должны быть заполнены');
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  formEl.reset();
}

