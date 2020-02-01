'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  today = new Date().getDay() - 1;

for (let i = 0; i < week.length; i++) {
  if (i === today) {
    if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
      document.write(`<p><b><i>${week[i]}</i></b></p>`);
    } else {
      document.write(`<p><b>${week[i]}</b></p>`);
    }
  } else if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
    document.write(`<p><i>${week[i]}</i></p>`);
  } else {
    document.write(`<p>${week[i]}</p>`);
  }
}
console.log(week);