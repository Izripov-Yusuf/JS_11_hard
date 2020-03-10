'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const color = document.getElementById('color');
const widthPaint = document.getElementById('width');
const widthAmount = document.querySelector('.paint-width');

color.addEventListener('input', () => {
  ctx.strokeStyle = color.value;
});

const changeRange = (event) => {
  widthPaint.value = event.target.value;
  widthAmount.textContent = widthPaint.value;
  ctx.lineWidth = widthPaint.value;
};

widthPaint.addEventListener('input', changeRange);

canvas.addEventListener('mousemove', (event) => {
  const x = event.offsetX,
    y = event.offsetY,
    mx = event.movementX,
    my = event.movementY;

  if (event.buttons > 0) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - mx, y - my);
    ctx.stroke();
    ctx.closePath();
  }
});