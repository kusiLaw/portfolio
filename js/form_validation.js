const emailErrorMsg = "Email show not be in lower case letter";
const form = document.getElementById('contactForm');
const successMsg  = ""

const email = form.elements['email']

function validateForm(mailObject) {
  return mailObject.value === mailObject.value.toLowerCase()
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  if (validateForm(email)) {
    form.querySelector('#error').innerHTML = successMsg;
    form.submit();
  }
  else {
    form.querySelector('#error').innerHTML = emailErrorMsg
  }
});