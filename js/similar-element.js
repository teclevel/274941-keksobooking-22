import {dataAdvertisements} from './advertisement.js';

const advertisementList = document.querySelector('.map__canvas');
const templateFragment = document.querySelector('#card')
  .content
  .querySelector('.popup');

dataAdvertisements.forEach((element) => {
  const newAdvertisement = templateFragment.cloneNode(true);

  newAdvertisement.querySelector('.popup__avatar').src = element.author.avatar;
  newAdvertisement.querySelector('.popup__title').textContent = element.offer.title;
  newAdvertisement.querySelector('.popup__text--address').textContent = element.offer.address;
  newAdvertisement.querySelector('.popup__text--price').textContent = element.offer.price + ' ₽/ночь';


  const numberRooms = element.offer.rooms;
  let prefixRooms =' комнат для ';
  const numberGuests = element.offer.guests;
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
  newAdvertisement.querySelector('.popup__text--time').textContent = 'Заезд после ' + element.offer.checkin + ', выезд до ' + element.offer.checkout;
  newAdvertisement.querySelector('.popup__description').textContent = element.offer.description;



  const popupPhotos = newAdvertisement.querySelector('.popup__photos');
  const popupPhoto = newAdvertisement.querySelector('.popup__photo');
  popupPhotos.removeChild(popupPhoto);

  element.offer.photos.forEach((item) => {
    popupPhoto.src = item;
    popupPhotos.appendChild(popupPhoto.cloneNode(true));
  });


  // Не правильно выводятся данные
  const featuresList = newAdvertisement.querySelector('.popup__features');
  const featuresItems = newAdvertisement.querySelectorAll('.popup__feature');
  const featureItem = newAdvertisement.querySelector('.popup__feature')
  //featuresList.removeChild(featureItem);

  featuresItems.forEach((item) => {
    featuresList.removeChild(item);
  });

  element.offer.features.forEach((item) => {
    featureItem.classList.add('popup__feature--'+ item);
    featuresList.appendChild(featureItem.cloneNode(true));
  });
  // console.log(featuresItems)
  // console.log(element.offer.features)

  // версия  с for
  /*
  const featuresList = newAdvertisement.querySelector('.popup__features');
  const featuresItem = featuresList.children;

  for (let i = featuresItem.length-1; i >= 0; i--){
    const lengthFeatures = element.offer.features.length;
    let sum = 0;
    for (let j = 0; j < lengthFeatures; j++){
      if (!featuresItem[i].classList.contains('popup__feature--' + element.offer.features[j])){
        sum ++;
        if (sum === lengthFeatures){
          featuresList.removeChild(featuresItem[i]);
        }
      }
    }
  }
  */


  const typeOfHousing = newAdvertisement.querySelector('.popup__type');

  switch (element.offer.type) {
    case 'palace':
      typeOfHousing.textContent = 'Дворец';
      break;
    case 'flat':
      typeOfHousing.textContent = 'Квартира';
      break;
    case 'house':
      typeOfHousing.textContent = 'Дом';
      break;
    case 'bungalow':
      typeOfHousing.textContent = 'Бунгало';
      break;
    default:
      typeOfHousing.textContent = 'Любой тип жилья';
  }


  advertisementList.appendChild(newAdvertisement);
});
