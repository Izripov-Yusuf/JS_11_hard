'use strict';

// Решение с помощью if
let lang = prompt('Выберите язык, введя "ru" или "en"');
if (lang === 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

// Решение с помощью switch
switch (lang) {
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;

  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
  default:
    console.log('Не знаю такой язык(');
    break;
}

// Решение с помощью многомерного массива
let arr = {
  'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
console.log(arr[lang]);

// Вторая часть усложнённого урока
let namePerson = prompt('Ваше имя?');
let checkNamePerson = namePerson === 'Артем' ? console.log('Директор') : (namePerson === 'Максим') ?
console.log('Преподаватель') : console.log('Студент');