const emailErrorMsg = 'Email must be in lowercase letters. Form not sent';
const form = document.getElementById('contactForm');
const successMsg = '';

const { email } = form.elements;

function validateForm(mailObject) {
  return mailObject.value === mailObject.value.toLowerCase();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateForm(email)) {
    form.querySelector('#error').innerHTML = successMsg;
    form.submit();
  } else {
    form.querySelector('#error').innerHTML = emailErrorMsg;
  }
});

/// / local storage /////
let localData = {};
const userNames = form.elements['text-input'];

function populateObject(data, value) {
  localData[data] = value;
}

function populateLocalStorage() {
  localStorage.setItem('data', JSON.stringify(localData));
}

function populateFormFromStorage() {
  if (localStorage.getItem('data')) {
    // data in storage
    // convert to js object
    localData = JSON.parse(localStorage.getItem('data'));
    email.value = localData.email;
    userNames.value = localData.userName;
  }
}

email.addEventListener('focusout', () => {
  populateObject('email', email.value);
  populateLocalStorage();
});

userNames.addEventListener('focusout', () => {
  populateObject('userName', userNames.value);
  populateLocalStorage();
});

document.body.onload = populateFormFromStorage();