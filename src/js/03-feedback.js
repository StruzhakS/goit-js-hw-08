const form = document.querySelector('.feedback-form');
const btn = form.querySelector('button');
let obj = {};
const defaulValue = JSON.parse(localStorage.getItem('feedback-form-state'));

form.addEventListener('input', takeInputToLS);

function takeInputToLS(e) {
  obj.email = e.currentTarget.email.value;
  obj.message = e.currentTarget.message.value;

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

form.addEventListener('submit', () => {
  obj = {};
  console.log(obj);
  localStorage.removeItem('feedback-form-state');
});
