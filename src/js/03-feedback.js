import throttle from 'lodash.throttle';
import { saveToLS } from './helpers';

const form = document.querySelector('.feedback-form');
const btn = form.querySelector('button');
let obj = {};
const defaulValue = JSON.parse(localStorage.getItem('feedback-form-state'));

form.addEventListener('input', throttle(takeInputToLS, 500));

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
  saveToLS('feedback-form-state', obj);
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
