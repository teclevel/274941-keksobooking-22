
const templateSuccess = document.querySelector('#success')
  .content.querySelector('.success');
const templateError = document.querySelector('#error')
  .content.querySelector('.error');


const openPopupSuccess = () => {
  const popupSuccess = templateSuccess.cloneNode(true);
  document.body.append(popupSuccess);

  setTimeout(() => {
    popupSuccess.remove();
  },3000);
};


const openPopupError = () => {
  const popupError = templateError.cloneNode(true);
  document.body.append(popupError);
  const buttonError = document.querySelector('.error__button');

  buttonError.addEventListener('click', () => {
    popupError.remove();
  });

  document.addEventListener('keydown', (evt) =>{
    if (evt.key === ('Escape'|| 'Esc')){
      popupError.remove();
    }
  });
};


export {openPopupSuccess};
export {openPopupError};
