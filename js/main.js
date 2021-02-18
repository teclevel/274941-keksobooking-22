import './similar-element.js';
import './map.js';


const advertisements = document.querySelectorAll('.popup');

const showAdvertisement = (element, n) => {
  element[n].classList.remove('visually-hidden');
};

//showAdvertisement(advertisements, 0);

const formNotice = document.querySelector('.ad-form');
const noticeUser = formNotice.querySelector('.ad-form-header');
const noticeUsers = formNotice.querySelectorAll('.ad-form__element');



const formFilter = document.querySelector('.map__filters');
const filters = formFilter.querySelectorAll('.map__filter');
const filterFeatures = formFilter.querySelector('.map__features');

formNotice.classList.add('ad-form--disabled');
noticeUser.setAttribute('disabled','');

noticeUsers.forEach((element) => {
  element.setAttribute('disabled','');
});

formFilter.classList.add('map__filters--disabled');

filters.forEach((element) => {
  element.setAttribute('disabled','');
});

filterFeatures.setAttribute('disabled','');
