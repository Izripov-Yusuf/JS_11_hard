'use strict';

let str = '    This is string This is string This is string This is string This is string This is string    ';
function func(str) {
  if (typeof(str) === 'string') {
    console.log(str.trim());
    if (str.trim().length > 30) {
      console.log(str.trim().substring(0, 30) + '...');
    }
  } else {
    console.log('Введите строку');
  }
}
func(str);