// HTML містить список категорій ul#categories.
// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const items = document.querySelectorAll('li.item');

console.log('Number of categories:', items.length);

items.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});
