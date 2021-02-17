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
  photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
};

const Location = {
  X_MIN: 35.65000,
  X_MAX: 35.70000,
  Y_MIN: 139.70000,
  Y_MAX: 139.80000,
};

const Housing = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

export {OFFER, Location, Housing};
