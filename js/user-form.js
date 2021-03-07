import {price} from './datum-initial.js';
import {openPopupError} from './popup.js';
import {sendData} from './create-fetch.js';

const typeHousing = document.querySelector('#type');
const priceHousing = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const adForm = document.querySelector('.ad-form');
const fieldSelectRooms = adForm.querySelector('#room_number');
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
  for (let element of numberGuests) {
    if (!(parseInt(element.value)===1)){
      element.toggleAttribute('disabled', true);
    }
  }
}

resetFieldGuest();

fieldSelectRooms.addEventListener('change', () => {
  resetFieldGuest();
  numberGuests[2].toggleAttribute('disabled', true);

  switch(parseInt(fieldSelectRooms.value)){
    case 3:
      numberGuests[0].toggleAttribute('disabled', false);
    // eslint-disable-next-line no-fallthrough
    case 2:
      numberGuests[1].toggleAttribute('disabled', false);
      // eslint-disable-next-line no-fallthrough
    case 1:
      numberGuests[2].toggleAttribute('disabled', false);
      fieldSelectGuests.value = numberGuests[2].value;
      break;

    case 100:
      numberGuests[3].toggleAttribute('disabled', false);
      fieldSelectGuests.value = numberGuests[3].value;
      break;
  }
})

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
