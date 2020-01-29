'use strict';

// Первое задание
let arr = ['2678', '7777', '555', '444', '333', '222', '40456'];

arr.forEach((e) => {
  if (e[0] === '2' || e[0] === '4') {
    console.log(`<br>${e}`);
  }
});

// Второе задание
let x = 100;

nextNumber:
for (let i = 2; i <= x; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue nextNumber;
    }
  }

  console.log(i + ' Делители этого числа 1 и ' + i);
}