'use strict';

const ADVERTISEMENT_COUNT = 10;
/* const AUTHOR = {
  avatar: 'img/avatars/user09.png',
};
const numEl = parseInt(AUTHOR.avatar.match(/\d+/));
console.log(numEl); */

const OFFER = {
  title: 'Заголовок предложения',
  address: '35.65000, 139.80000',
  price: 7000,
  type:  ['palace', 'flat', 'house', 'bungalow'],
  rooms: 5,
  guests: 3,
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: ['wi-fi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'Описание помещения',
  photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
};

const LOCATION = {
  xMin: 35.65000,
  xMax: 35.70000,
  yMin: 139.70000,
  yMax: 139.80000,
};

const message = 'Не правильно введены данные';

const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && min < max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  alert(message);
};

const getRandomInclusive = (min, max, digitsAfterPoint) => {
  if (min >= 0 && min < max){
    return parseFloat((Math.random() * (max- min) + min).toFixed(digitsAfterPoint));
  }
  alert(message);
};

const shuffleNewArray = (array) =>{
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  const lengthArray = getRandomIntInclusive(0, array.length);
  const newArr = [];
  for (let i = 0; i < lengthArray ; i++){
    newArr[i] = array[i];
  }
  return newArr;
};

const getRandomLocation = (xMin, xMax, yMin, yMax) =>{
  const x = getRandomInclusive(xMin, xMax, 5);
  const y = getRandomInclusive(yMin, yMax, 5);
  return [x, y];
};

const getRandomIndexArray = (array)=> {
  const index = getRandomIntInclusive(0, array.length-1)
  return index;
};

const getAdvertisement = () => {
  const location = getRandomLocation (LOCATION.xMin, LOCATION.xMax, LOCATION.yMin, LOCATION.yMax);
  return {
    author:{
      avatar: 'img/avatars/user0' + getRandomIntInclusive(1, 8) + '.png',
    },
    offer: {
      title: OFFER.title,
      address: location[0] + ', ' + location[1],
      price: getRandomIntInclusive(10000, 50000),
      type: OFFER.type[getRandomIndexArray(OFFER.type)],
      checkin: OFFER.checkin[getRandomIndexArray(OFFER.checkin)],
      checkout: OFFER.checkout[getRandomIndexArray(OFFER.checkout)],
      rooms: getRandomIntInclusive(1, 6),
      guests: getRandomIntInclusive(1, 10),
      description: OFFER.description,
      features: shuffleNewArray(OFFER.features),
      photos: shuffleNewArray(OFFER.photos),
    },
    location:{
      x: location[0],
      y: location[1],
    },
  }
};

const dataAdvertisements = new Array(ADVERTISEMENT_COUNT).fill(null).map(() => getAdvertisement());

alert(dataAdvertisements);
//console.log(dataAdvertisements);
