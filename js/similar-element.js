import {dataAdvertisements} from './advertisement.js';

const advertisementList = document.querySelector('.map__canvas');
const templateFragment = document.querySelector('#card')
  .content
  .querySelector('.popup');

//const similarListFragment = document.createDocumentFragment();

dataAdvertisements.forEach((element) => {
  const newAdvertisement = templateFragment.cloneNode(true);

  newAdvertisement.querySelector('.popup__avatar').src = element.author.avatar;
  newAdvertisement.querySelector('.popup__title').textContent = element.offer.title;
  newAdvertisement.querySelector('.popup__text--address').textContent = element.offer.address;
  newAdvertisement.querySelector('.popup__text--price').textContent = element.offer.price + ' ₽/ночь';
  newAdvertisement.querySelector('.popup__text--capacity').textContent = element.offer.rooms + ' комнаты для ' + element.offer.guests + ' гостей';
  newAdvertisement.querySelector('.popup__text--time').textContent = 'Заезд после ' + element.offer.checkin + ', выезд до ' + element.offer.checkout;
  newAdvertisement.querySelector('.popup__description').textContent = element.offer.description;
  const popupPhotos = newAdvertisement.querySelector('.popup__photos');
  const popupPhoto = newAdvertisement.querySelector('.popup__photo');
  popupPhotos.removeChild(popupPhoto);

  for(let i = 0; i < element.offer.photos.length; i++){
    popupPhoto.src = element.offer.photos[i];
    popupPhotos.appendChild(popupPhoto.cloneNode(true));
  }

  //const featuresList = newAdvertisement.querySelector('.popup__features');
  //const featuresItem = featuresList.children;


  //console.log(featuresItem[1].classList.contains('popup__feature--' + element.offer.features[7]));

  /* for (let i = featuresItem.length-1; i >= 0;  i--){
    featuresList.(featuresItem[i]);
  } */


  /*   for (let i = 0; i < element.offer.features.length; i++){
    for (let j = 1; j <= featuresItem.length; j++){
      // console.log(featuresItem[i]);
      // console.log(!featuresItem[i].classList.contains('popup__feature--' + element.offer.features[j]) && (j+1 === element.offer.features.length));
      if (featuresItem[j].classList.contains('popup__feature--' + element.offer.features[i])){


        console.log('count = '+ i + '  : ' +'length= ' + element.offer.features.length );
        console.log(element.offer.features);
      }
    }
  } */





  advertisementList.appendChild(newAdvertisement);
})


console.log (dataAdvertisements);
