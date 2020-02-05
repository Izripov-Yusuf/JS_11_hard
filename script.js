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

function num3str(n, textForms) {
  n = Math.abs(n) % 100; let n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[0]; }
  if (n1 === 1) { return textForms[1]; }
  return textForms[2];
}
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
document.write('Сегодня ' + `${weekday[date.getDay()]}, ` + `${day} ` + month[date.getMonth()] + ` ${year} года, ` + `${checkTime(hours)} ${num3str(checkTime(hours), ['часа', 'час', 'часов'])} ` + `${checkTime(minutes)} ${num3str(checkTime(minutes), ['минуты', 'минута', 'минут'])} ` + `${checkTime(seconds)} ${num3str(checkTime(seconds), ['секунды', 'секунда', 'секунд'])}`);
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