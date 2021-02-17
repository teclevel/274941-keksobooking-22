import {getArrayAdvertisements} from './advertisement.js';
import {Housing} from './datum-initial.js'

const advertisementList = document.querySelector('.map__canvas');
const templateFragment = document.querySelector('#card')
  .content
  .querySelector('.popup');
const similarListFragment = document.createDocumentFragment();


const similarAdvertisements = getArrayAdvertisements();

similarAdvertisements.forEach(({author, offer}) => {
  const newAdvertisement = templateFragment.cloneNode(true);
  newAdvertisement.classList.add('visually-hidden');
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

  const setTypeHousing = (element, type) => {
    return element.textContent = Housing[type];
  };
  setTypeHousing(typeOfHousing, offer.type);


  similarListFragment.appendChild(newAdvertisement);
});

advertisementList.appendChild(similarListFragment);
