window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  let date = new Date();

  week.forEach(function (day, index) {
    let days = document.createElement('div');
    days.innerHTML = day;
    document.body.appendChild(days);

    if (index === 5 || index === 6) {
      days.style.fontStyle = 'italic';
    }
    let currentDay = date.getDay();
    if (currentDay === 0) {
      currentDay = 7;
    }
    if (index === (currentDay - 1)) {
      days.style.fontWeight = 'bold';
    }
  });
});