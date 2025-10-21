// === Selectors ===
const form = document.querySelector('#contact');
const fullnameInput = document.querySelector('#fullname');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
const btn = document.querySelector('#btn');

const fullnameErr = document.querySelector('#error-fullname');
const emailErr = document.querySelector('#error-email');
const subjectErr = document.querySelector('#error-subject');
const messageErr = document.querySelector('#error-message');
const successMessage = document.querySelector('#success');

// === Helper to show error with style and auto-hide ===
function showError(element, message) {
  element.textContent = message;
  element.style.color = 'red';
  element.style.fontWeight = '500';
  element.style.fontSize = '0.9rem';

  setTimeout(() => {
    element.textContent = '';
  }, 4000); // hide after 4 seconds
}

// === Validation Function ===
function ValidateInputs(e) {
  e.preventDefault();

  // Reset success message
  successMessage.textContent = '';

  let isValid = true;

  const fullname = fullnameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  // Full name validation
  if (fullname === '') {
    showError(fullnameErr, 'Full name is required.');
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    showError(emailErr, 'Email is required.');
    isValid = false;
  } else if (!emailPattern.test(email)) {
    showError(emailErr, 'Please enter a valid email (e.g. name@example.com).');
    isValid = false;
  }

  // Subject validation
  if (subject === '') {
    showError(subjectErr, 'Subject is required.');
    isValid = false;
  }

  // Message validation
  if (message === '') {
    showError(messageErr, 'Message is required.');
    isValid = false;
  } else if (message.length < 10) {
    showError(messageErr, 'Message must be at least 10 characters long.');
    isValid = false;
  }

  // If all valid, show success
  if (isValid) {
    successMessage.textContent = 'Your message was successfully sent!';
    successMessage.style.color = 'limegreen';
    successMessage.style.fontWeight = '600';
    form.reset();
  }
}

// === Event Listeners ===
btn.addEventListener('click', ValidateInputs);


document.addEventListener('DOMContentLoaded', () => { 
    const timeElement = document.querySelector('#current-time'); 
    function updateTime() { 
        const now = new Date(); 
        const hours = now.getHours().toString().padStart(2, '0'); 
        const minutes = now.getMinutes().toString().padStart(2, '0'); 
        const seconds = now.getSeconds().toString().padStart(2, '0'); 
        timeElement.innerText = `${hours}:${minutes}:${seconds}`; 
    } updateTime(); setInterval(updateTime, 1000); });
