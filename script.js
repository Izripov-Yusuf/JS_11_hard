let num = 266219;
let res = 1;
num.toString().split('').forEach(function (el) {
  res *= el;
});
console.log(res);

console.log((res ** 3).toString().substring(0, 2));