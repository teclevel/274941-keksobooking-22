import {addressLocation} from './datum-initial.js';
import {setMainMarker, deleteMarker} from './map.js';
import {resetFieldGuest, setInitialPrice} from './user-form.js';
import {isEscEvent} from './util.js';
import {removeImage, removeAvatar} from './avatar.js';

const buttonSubmit = document.querySelector('.ad-form__submit')
const buttonReset = document.querySelector('.ad-form__reset');
const adForm = document.querySelector('.ad-form');

const templateSuccess = document.querySelector('#success')
  .content.querySelector('.success');
const popupSuccess = templateSuccess.cloneNode(true);
popupSuccess.classList.add('hidden')
document.body.append(popupSuccess);

const templateError = document.querySelector('#error')
  .content.querySelector('.error');
const popupError = templateError.cloneNode(true);
popupError.classList.add('hidden');
document.body.append(popupError);
const buttonError = document.querySelector('.error__button');


const openPopupSuccess = () => {
  popupSuccess.classList.remove('hidden');
  buttonSubmit.toggleAttribute('disabled', true);
  document.addEventListener('click', onPopupSuccessClick);
  document.addEventListener('keydown', onPopupSuccessEsc);
};

const closePopupSuccess = () => {
  popupSuccess.classList.add('hidden');
  buttonSubmit.toggleAttribute('disabled', false);
  adForm.reset();
  resetFieldGuest();
  deleteMarker();
  setMainMarker(addressLocation);
  setInitialPrice();
  document.removeEventListener('click', onPopupSuccessClick);
  document.removeEventListener('keydown', onPopupSuccessEsc);
  removeImage();
  removeAvatar();
};

const onPopupSuccessClick = () => {
  closePopupSuccess();
};

const onPopupSuccessEsc = (evt) => {
  if (isEscEvent(evt)){
    closePopupSuccess();
  }
};

const openPopupError = () => {
  popupError.classList.remove('hidden');
  buttonSubmit.toggleAttribute('disabled', true);
  document.addEventListener('keydown', onPopupErrorEsc);
};

const closePopupError = () => {
  popupError.classList.add('hidden');
  buttonSubmit.toggleAttribute('disabled', false);
  document.removeEventListener('keydown', onPopupErrorEsc);
};

const onPopupErrorEsc = (evt) => {
  if (isEscEvent(evt)){
    closePopupError();
  }
};

buttonError.addEventListener('click', () => {
  closePopupError();
});

buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  adForm.reset();
  resetFieldGuest();
  deleteMarker();
  setMainMarker(addressLocation);
  setInitialPrice();
  removeImage();
  removeAvatar();
});

export {openPopupSuccess};
export {openPopupError};
