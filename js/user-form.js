import {price} from './datum-initial.js';
import {openPopupError} from './popup.js';
import {sendData} from './create-fetch.js';

const typeHousing = document.querySelector('#type');
const priceHousing = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const adForm = document.querySelector('.ad-form');

const setInitialPrice = () => {
  priceHousing.placeholder = price[typeHousing.value];
}

setInitialPrice();

typeHousing.addEventListener('change', () => {
  priceHousing.placeholder = price[typeHousing.value]
  priceHousing.min = priceHousing.placeholder;
});


const selectTime = (time1, time2) => {
  time1.addEventListener('change', () => {
    time2[time1.selectedIndex].selected = true;
  });
};

selectTime(timeIn, timeOut);
selectTime(timeOut, timeIn);

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => openPopupError(),
      new FormData(evt.target),
    );
  });
};

export {setUserFormSubmit, setInitialPrice};
