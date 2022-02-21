import throttle from 'lodash.throttle';

const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector('[name="email"]');
const messageRef = document.querySelector('[name="message"]');

let savedData = {};

updateForm();

formRef.addEventListener('input', throttle(onType,500));


function onType(event) {
  savedData[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state",
    JSON.stringify(savedData));
  console.log(localStorage.getItem("feedback-form-state"))
};

function updateForm() {
  if (!localStorage.getItem("feedback-form-state")) {
    return
  };
  savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
  emailRef.value = savedData[emailRef.name] || "";
  messageRef.value = savedData[messageRef.name] || "";
  console.dir(messageRef);
};
formRef.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  localStorage.removeItem("feedback-form-state");
  console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  formRef.reset();
};

