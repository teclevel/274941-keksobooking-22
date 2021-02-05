// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const message = 'Не правильно введены данные';

const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && min < max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //alert(message);
  console.log('min = '+ min);
  console.log('max = '+ max);
}

const getRandomInclusive = (min, max, digitsAfterPoint) => {
  if (min >= 0 && min < max){
    return parseFloat((Math.random() * (max- min) + min).toFixed(digitsAfterPoint));
  }
  alert(message);
}

const shuffle = (array) =>{
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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

const ADVERTISEMENT_COUNT = 3;
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

const getRandomLength = (array) => {
  for (let i = 0; i < getRandomIntInclusive(0, array.length) ; i++){
    array.pop();
  }
  return array;
};

const LOCATION = {
  xMin: 35.65000,
  xMax: 35.70000,
  yMin: 139.70000,
  yMax: 139.80000,
};

const getRandomLocation = (xMin, xMax, yMin, yMax) =>{
  let x = getRandomInclusive(xMin, xMax, 5);
  let y = getRandomInclusive(yMin, yMax, 5);
  return [x, y];
};


const getAdvertisement = () => {
  const location = getRandomLocation (LOCATION.xMin, LOCATION.xMax, LOCATION.yMin, LOCATION.yMax);
  //const newFeatures = getRandomLength(shuffle(OFFER.features));
  return {
    avatar: AUTHOR.avatar = 'img/avatars/user' + '0' + getRandomIntInclusive(1, 8) + '.png',
    offer: [
      OFFER.title,
      OFFER.address = String(location),
      OFFER.price = getRandomIntInclusive(10000, 50000),
      OFFER.type[getRandomIntInclusive(0, OFFER.type.length-1)],
      OFFER.rooms = getRandomIntInclusive(1, 6),
      OFFER.guests = getRandomIntInclusive(1, 10),
      OFFER.checkin[getRandomIntInclusive(0, OFFER.checkin.length-1)],
      OFFER.checkout[getRandomIntInclusive(0, OFFER.checkout.length-1)],
      OFFER.description,
      OFFER.features =  getRandomLength(shuffle(OFFER.features)),
      OFFER.photos[getRandomIntInclusive(0, OFFER.photos.length-1)],
    ],
    location: location,
  }
};

console.log(getAdvertisement());

const dataAdvertisement = new Array(ADVERTISEMENT_COUNT).fill(null).map(() => getAdvertisement());
console.log(dataAdvertisement);
