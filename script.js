document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const select = document.getElementById('cars'),
        output = document.getElementById('output');

  const getData = (url) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.setRequestHeader('Content-type', 'application/json');
      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          const data = JSON.parse(request.responseText);
          const outputSuccessMessage = () => {
            data.cars.forEach(item => {
              if (item.brand === select.value) {
                const {
                  brand,
                  model,
                  price
                } = item;
                output.innerHTML = `Тачка ${brand} ${model} <br>
                  Цена: ${price}$`;
              }
            });
          };
          resolve(outputSuccessMessage);
        } else {
          const outputErrorMessage = () => {
            output.innerHTML = 'Произошла ошибка';
          };
          reject(outputErrorMessage());
        }
      });
      request.send();
    });
  };

  select.addEventListener('change', () => {
    getData('./cars.json')
      .then(outputSuccessMessage => {
        outputSuccessMessage();
      })
      .catch(outputErrorMessage => outputErrorMessage);
  });
});