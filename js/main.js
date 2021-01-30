// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const message = 'Не правильно введены данные';
function getRandomIntInclusive(min, max) {
  if (min >= 0 && min < max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  alert(message);
}
getRandomIntInclusive(1, 4);


const getRandomInclusive = function (min, max, digitsAfterPoint) {
  if (min >= 0 && min < max){
    return (Math.random() * (max- min) + min).toFixed(digitsAfterPoint);
  }
  alert(message);
}
getRandomInclusive(0.6, 0.7, 2);
