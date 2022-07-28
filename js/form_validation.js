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