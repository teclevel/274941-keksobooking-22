import './similar-element.js';


const popup = document.querySelectorAll('.popup');

const showAdvertisement = (element, n) => {
   element[n].classList.remove('visually-hidden');
};

showAdvertisement(popup, 0);
