import {price} from './datum-initial.js';
import {openPopupError} from './popup.js';
import {sendData} from './create-fetch.js';

// const DEFAULT_NUMBER = 1;
const typeHousing = document.querySelector('#type');
const priceHousing = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const adForm = document.querySelector('.ad-form');
const fieldSelectRooms = adForm.querySelector('#room_number');
const numberRooms = fieldSelectRooms.children;
const fieldSelectGuests = adForm.querySelector('#capacity');
const numberGuests = fieldSelectGuests.children;

const setInitialPrice = () => {
  priceHousing.placeholder = price[typeHousing.value];
  priceHousing.min = priceHousing.placeholder;
}
setInitialPrice();

typeHousing.addEventListener('change', () => {
  setInitialPrice();
});

const selectTime = (time1, time2) => {
  time1.addEventListener('change', () => {
    time2[time1.selectedIndex].selected = true;
  });
};

selectTime(timeIn, timeOut);
selectTime(timeOut, timeIn);

const resetFieldGuest = () => {
  for (const element of numberGuests) {
    // if (!(parseInt(element.value) === DEFAULT_NUMBER)){
    element.setAttribute('disabled','');
    // }
  }
};

const changeSelectRooms = () => {
  numberGuests[2].setAttribute('disabled', '');

  switch(fieldSelectRooms.value){

    case numberRooms[2].value:
      numberGuests[0].removeAttribute('disabled');
    // eslint-disable-next-line no-fallthrough
    case numberRooms[1].value:
      numberGuests[1].removeAttribute('disabled');
      // eslint-disable-next-line no-fallthrough
    case numberRooms[0].value:
      numberGuests[2].removeAttribute('disabled');
      fieldSelectGuests.value = numberGuests[2].value;
      break;

    case numberRooms[3].value:
      numberGuests[3].removeAttribute('disabled');
      fieldSelectGuests.value = numberGuests[3].value;
      break;
  }
};

resetFieldGuest();

fieldSelectRooms.addEventListener('change', () => {
  resetFieldGuest();
  changeSelectRooms();
});

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(                                                       //  sendData(onSuccess, onFail, body)
      () => onSuccess(),
      () => openPopupError(),
      new FormData(evt.target),
    );
  });
};

export {setUserFormSubmit, setInitialPrice, resetFieldGuest};
