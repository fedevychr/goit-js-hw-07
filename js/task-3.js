// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
//     <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameInput = document.querySelector('#name-input');
const showTextElement = document.querySelector('#name-output');

const onChangeName = event => {
  const value = event.currentTarget.value.trim();
  showTextElement.textContent = value ? value : 'Anonymous';
};

nameInput.addEventListener('input', onChangeName);
