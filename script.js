'use strict';
document.addEventListener('DOMContentLoaded', () => {

  const body = document.querySelector('body');

  let top = 300,
    left = 600;

  const DomElement = function (selector, height, width, bg, fz) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fz;
  };

  DomElement.prototype.renderSelector = function () {
    if (this.selector[0] === '.') {
      const divD = document.createElement('div');
      body.appendChild(divD);
      divD.classList.add(this.selector.slice(1));
      divD.textContent = 'Текст';
      divD.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      position: absolute;
      background-color: ${this.bg};
      font-size: ${this.fontSize};
      margin-top: ${top}px;
      margin-left: ${left}px;
      `;
    }
  };

  const data = new DomElement('.block', '100px', '100px', 'green', '30px');
  data.renderSelector();
  console.log('data: ', data);

  window.addEventListener('keydown', function (event) {
    console.log(event.key);
    if (event.key === 'ArrowUp') {
      top -= 10;
      document.querySelector('div').remove();
      data.renderSelector();
    } else if (event.key === 'ArrowDown') {
      top += 10;
      document.querySelector('div').remove();
      data.renderSelector();
    } else if (event.key === 'ArrowLeft') {
      left -= 10;
      document.querySelector('div').remove();
      data.renderSelector();
    } else if (event.key === 'ArrowRight') {
      left += 10;
      document.querySelector('div').remove();
      data.renderSelector();
    }
  });
});