import {housing} from './datum-initial.js'

const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');

const createCustomPopup = (point) => {
  const {author, offer} = point;
  const newAdvertisement = balloonTemplate.cloneNode(true);
  newAdvertisement.querySelector('.popup__avatar').src = author.avatar;
  newAdvertisement.querySelector('.popup__title').textContent = offer.title;
  newAdvertisement.querySelector('.popup__text--address').textContent = offer.address;
  newAdvertisement.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';


  const numberRooms = offer.rooms;
  let prefixRooms =' комнат для ';
  const numberGuests = offer.guests;
  let prefixGuests = ' гостей';

  switch (numberRooms % 10) {
    case 1:
      prefixRooms = ' комната для '
      break;
    case 2:
    case 3:
    case 4:
      prefixRooms = ' комнаты для '
      break;

    default: prefixRooms =' комнат для ';
      break;
  }

  switch (numberGuests % 10) {
    case 1:
      prefixGuests = ' гостя';
      break;
    default:
      prefixGuests = ' гостей';
      break;
  }

  newAdvertisement.querySelector('.popup__text--capacity').textContent = numberRooms + prefixRooms + numberGuests + prefixGuests;
  newAdvertisement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;
  newAdvertisement.querySelector('.popup__description').textContent = offer.description;


  const popupPhotos = newAdvertisement.querySelector('.popup__photos');
  const popupPhoto = newAdvertisement.querySelector('.popup__photo');
  popupPhotos.removeChild(popupPhoto);

  offer.photos.forEach((item) => {
    popupPhoto.src = item;
    popupPhotos.appendChild(popupPhoto.cloneNode(true));
  });


  const featuresList = newAdvertisement.querySelector('.popup__features');
  const featuresItems = newAdvertisement.querySelectorAll('.popup__feature');
  const featureItem = newAdvertisement.querySelector('.popup__feature')

  featuresItems.forEach((item) => {
    featuresList.removeChild(item);
  });

  offer.features.forEach((item) => {
    featureItem.className = ('popup__feature popup__feature--'+ item);
    featuresList.appendChild(featureItem.cloneNode(true));
  });


  const typeOfHousing = newAdvertisement.querySelector('.popup__type');
  typeOfHousing.textContent = housing[offer.type];

  return newAdvertisement;
};

export {createCustomPopup};
