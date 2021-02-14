import {getRandomIntInclusive, shuffleNewArray, getRandomLocation, getRandomElementArray} from './util.js';
import {OFFER, Location} from './datum-initial.js';

const ADVERTISEMENT_COUNT = 1;

const getAdvertisement = () => {
  const location = getRandomLocation(Location.X_MIN, Location.X_MAX, Location.Y_MIN, Location.Y_MAX);
  return {
    author:{
      avatar: 'img/avatars/user0' + getRandomIntInclusive(1, 8) + '.png',
    },
    offer: {
      title: OFFER.title,
      address: location[0] + ', ' + location[1],
      price: getRandomIntInclusive(10000, 50000),
      type: getRandomElementArray(OFFER.type),
      checkin: getRandomElementArray(OFFER.checkin),
      checkout: getRandomElementArray(OFFER.checkout),
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

export {dataAdvertisements};
