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

function num2str(n, textForms) {
  n = Math.abs(n) % 100; let n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 === 1) { return textForms[0]; }
  return textForms[2];
}
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  /* function time() {
    return document.write(`${weekday[date.getDay()]}, ` + `${day} ` + month[date.getMonth()] + ` ${year} года, ` + `${checkTime(hours)} ${num2str(1, ['часов', 'час', 'часа'])} ` + `${checkTime(minutes)} минут ` + `${checkTime(seconds)} секунд`);
  } */
document.write('Сегодня ' + `${weekday[date.getDay()]}, ` + `${day} ` + month[date.getMonth()] + ` ${year} года, ` + `${checkTime(hours)} ${num2str(1, ['часов', 'час', 'часа'])} ` + `${checkTime(minutes)} минут ` + `${checkTime(seconds)} секунд`);
document.write(`<br>${fullYear} - ` + `${fullTime}`);


function clock() {
  let date = new Date(),
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);
clock();