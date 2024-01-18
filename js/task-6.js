// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру. Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const countOfDiv = document.querySelector('#controls input');
const containerOfBoxes = document.querySelector('#boxes');

const createBoxes = amount => {
  let initialSize = 30;
  containerOfBoxes.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.height = initialSize + 'px';
    box.style.width = initialSize + 'px';
    box.style.backgroundColor = getRandomHexColor();
    containerOfBoxes.appendChild(box);
    initialSize += 10;
  }
};

const create = () => {
  const amount = Number(countOfDiv.value);
  if (amount <= 100 && amount > 0) {
    createBoxes(amount);
    countOfDiv.value = '';
  }
};

const destroyBoxes = () => {
  containerOfBoxes.innerHTML = '';
};

createButton.addEventListener('click', create);
destroyButton.addEventListener('click', destroyBoxes);
