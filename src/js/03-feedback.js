import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const btn = form.querySelector('button');
let obj = {};
const defaulValue = JSON.parse(localStorage.getItem('feedback-form-state'));

form.addEventListener('input', throttle(takeInputToLS, 2000));

function takeInputToLS(e) {
  obj.email = form.elements.email.value;
  obj.message = form.elements.message.value;

  if (obj.email === '') {
    delete obj.email;
  }
  if (obj.message === '') {
    delete obj.message;
  }
  getValueToLS(obj);
}

function getValueToLS(data) {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

form.email.value = defaulValue?.email || '';
form.message.value = defaulValue?.message || '';

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(obj);
  obj = {};
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
