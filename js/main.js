// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const message = 'Не правильно введены данные';
const getRandomIntInclusive = function (min, max) {
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
    return parseFloat((Math.random() * (max- min) + min).toFixed(digitsAfterPoint));
  }
  alert(message);
}
getRandomInclusive(0.6, 0.7, 2);

// В файле main.js на основе написанных в прошлом задании утилитарных функций напишите необходимые
// функции для создания
// массива из
// 10 сгенерированных JS-объектов. Каждый объект массива —
// описание похожего объявления неподалёку.
// Структура каждого объекта должна быть следующей:


//*author, объект — описывает автора. Содержит одно поле:
//avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это случайное число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д.
// const addZero = (number) => {
//   let result =  '0'+ number;
//   return result;
// }

const AUTOR = {
  avatar : 'img/avatars/user{{xx}}.png'
}

//*offer, объект — содержит информацию об объявлении. Состоит из полей:
// title, строка — заголовок предложения. Придумайте самостоятельно.
// address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
// price, число — стоимость. Любое положительное число.
// type, строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.
// rooms, число — количество комнат. Любое положительное число.
// guests, число — количество гостей, которое можно разместить. Любое положительное число.
// checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
// checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
// description, строка — описание помещения. Придумайте самостоятельно.
// photos, массив строк — массив случайной длины из значений: http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg.

const OFFER = {
  title : 'Заголовок предложения',
  address : '{{location.x}}, {{location.y}}',
  price : 500,
  type :  'palace, flat, house или bungalow',
  rooms : 5,
  guests : 3,
  checkin : '12:00, 13:00 или 14:00',
  ceckout : '12:00, 13:00 или 14:00.',
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'Описание помещения',
  photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

// location, объект — местоположение в виде географических координат. Состоит из двух полей:
// x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
// y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000

const LOCATION = {
  x : 'от 35.65000 до 35.70000',
  y : 'от 139.70000 до 139.80000'
}
