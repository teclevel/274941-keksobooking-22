import './similar-element.js';


const advertisements = document.querySelectorAll('.popup');

const showAdvertisement = (element, n) => {
  element[n].classList.remove('visually-hidden');
};

showAdvertisement(advertisements, 0);
