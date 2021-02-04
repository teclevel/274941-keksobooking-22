// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const message = 'Не правильно введены данные';

const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && min < max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  alert(message);
}

const getRandomInclusive = (min, max, digitsAfterPoint) => {
  if (min >= 0 && min < max){
    return parseFloat((Math.random() * (max- min) + min).toFixed(digitsAfterPoint));
  }
  alert(message);
}

const shuffle = (element) =>{
  for (let i = 0; i < element.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [element[i], element[j]] = [element[j], element[i]];
  }
  return element;
};


// В файле main.js на основе написанных в прошлом задании утилитарных функций напишите необходимые
// функции для создания
// массива из
// 10 сгенерированных JS-объектов. Каждый объект массива —
// описание похожего объявления неподалёку.
// Структура каждого объекта должна быть следующей:


// 1 author, объект — описывает автора. Содержит одно поле:
// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это случайное число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д.

//  offer, объект — содержит информацию об объявлении. Состоит из полей:

// 2 title, строка — заголовок предложения. Придумайте самостоятельно.
// 3 address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
// 4 price, число — стоимость. Любое положительное число.
// 5 type, строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.
// 6 rooms, число — количество комнат. Любое положительное число.
// 7 guests, число — количество гостей, которое можно разместить. Любое положительное число.
// 8 checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
// 9 checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
// 10 features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
// 11 description, строка — описание помещения. Придумайте самостоятельно.
// 12 photos, массив строк — массив случайной длины из значений: http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg.

// 3 location, объект — местоположение в виде географических координат. Состоит из двух полей:
// x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
// y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000

const ADVERTISMENT_COUNT = 10;
const AUTHOR = {
  avatar: 'img/avatars/user01.png',
};

const OFFER = {
  title: 'Заголовок предложения',
  address: '35.65000, 139.80000',
  price: 7000,
  type:  ['palace', 'flat', 'house', 'bungalow'],
  rooms: 5,
  guests: 3,
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'Описание помещения',
  photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
};
console.log(OFFER.features);

// const countStart =  getRandomIntInclusive(0, OFFER.features.length);
// const countEnd = getRandomIntInclusive(0, OFFER.features.length);
// for (let i = countStart; i < countEnd; i++){
//   console.log(i);
// }
//index = getRandomIntInclusive(0, 5);

shuffle(OFFER.features);
console.log(OFFER.features);

const LOCATION = {
  x: 35.65000,
  y: 139.70000,
};
/* const randomFeatures = OFFER.features.map((value, index, array) => {

 array[index] = value;
 //index = 2;//getRandomIntInclusive(0, OFFER.features.length-1);
  return array;
});
 console.log(randomFeatures); */
 
LOCATION.x = getRandomInclusive(35.65000, 35.70000, 5);
LOCATION.y = getRandomInclusive(139.70000, 139.80000, 5);
const getAdvertisement = () => {
  return {
    avatar: AUTHOR.avatar = 'img/avatars/user' + '0' + getRandomIntInclusive(1, 8) + '.png',
    offer: [
      OFFER.title,
      OFFER.address = String(LOCATION.x) + ', ' + String(LOCATION.y),
      OFFER.price = getRandomIntInclusive(10000, 50000),
      OFFER.type[getRandomIntInclusive(0, OFFER.type.length-1)],
      OFFER.rooms = getRandomIntInclusive(1, 6),
      OFFER.guests = getRandomIntInclusive(1, 10),
      OFFER.checkin[getRandomIntInclusive(0, OFFER.checkin.length-1)],
      OFFER.checkout[getRandomIntInclusive(0, OFFER.checkout.length-1)],
      OFFER.description,
      OFFER.features[getRandomIntInclusive(0, OFFER.features.length-1)],
      OFFER.photos[getRandomIntInclusive(0, OFFER.photos.length-1)],
    ],
    location: [LOCATION.x, LOCATION.y],
  }
};

console.log(getAdvertisement());

const dataAdvertisment = new Array(ADVERTISMENT_COUNT).fill(null).map(() => getAdvertisement());
console.log(dataAdvertisment);

