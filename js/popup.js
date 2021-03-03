import {AddressLocation} from './datum-initial.js';
import {setMainMarker, setInitialAddress, deleteMarker} from './map.js';
import {isEscEvent, isEnterEvent} from './util.js';

const TIMER_POPUP_SUCCESS = 3000;

const buttonSubmit = document.querySelector('.ad-form__submit')

const templateSuccess = document.querySelector('#success')
  .content.querySelector('.success');

const templateError = document.querySelector('#error')
  .content.querySelector('.error');
const popupError = templateError.cloneNode(true);
popupError.classList.add('hidden');
document.body.append(popupError);
const buttonError = document.querySelector('.error__button');
const buttonReset = document.querySelector('.ad-form__reset');

const adForm = document.querySelector('.ad-form');

const openPopupSuccess = () => {
  const popupSuccess = templateSuccess.cloneNode(true);
  document.body.append(popupSuccess);

  setTimeout(() => {
    popupSuccess.remove();
    adForm.reset();
    deleteMarker();
    setMainMarker(AddressLocation);
  },TIMER_POPUP_SUCCESS);
};

const openPopupError = () => {
  popupError.classList.remove('hidden');
  buttonSubmit.toggleAttribute('disabled', true);
};

const closePopupError = () => {
  popupError.classList.add('hidden');
  buttonSubmit.toggleAttribute('disabled', false);
  //popupError.remove();
};

buttonError.addEventListener('click', () => {
  closePopupError();
});

buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  adForm.reset();
  deleteMarker();
  setMainMarker(AddressLocation);
});

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)){
    closePopupError();
  }
});

document.addEventListener('keydown', (evt) =>{
  if (isEnterEvent(evt)){
    closePopupError();
  }
});

export {openPopupSuccess};
export {openPopupError};
