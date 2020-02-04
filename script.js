'use strict';

let date = new Date(),
  month = ['января', 'февраля', 'марта', 'апрея', 'мая', 'июня', 'июля', 'августа', 'сентября',
  'октября', 'ноября', 'декабря'],
  weekday = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  day = date.getDate(),
  year = date.getFullYear(),
  hours = date.getHours(),
  minutes = date.getMinutes(),
  seconds = date.getSeconds(),
  fullYear = date.toLocaleDateString(),
  fullTime = date.toLocaleTimeString();
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
document.write('Сегодня ' + `${weekday[date.getDay()]}, ` + `${day} ` + month[date.getMonth()] + ` ${year} года, ` + `${checkTime(hours)} час ` + `${checkTime(minutes)} минут ` + `${checkTime(seconds)} секунд`);
document.write(`<br>${fullYear} - ` + `${fullTime}`);

/* setInterval(() => {
  document.write(`<br>${checkTime(hours)}:` + `${checkTime(minutes)}:` + `${checkTime(seconds)}`);
}, 1000); */