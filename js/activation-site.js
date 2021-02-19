const formNotice = document.querySelector('.ad-form');
const noticeUser = formNotice.querySelector('.ad-form-header');
const noticeUsers = formNotice.querySelectorAll('.ad-form__element');
const formFilter = document.querySelector('.map__filters');
const filters = formFilter.querySelectorAll('.map__filter');
const filterFeatures = formFilter.querySelector('.map__features');

const disableSite = () => {
  formNotice.classList.add('ad-form--disabled');
  formFilter.classList.add('map__filters--disabled');
  noticeUser.setAttribute('disabled','');
  filterFeatures.setAttribute('disabled','');

  noticeUsers.forEach((element) => {
    element.setAttribute('disabled','');
  });

  filters.forEach((element) => {
    element.setAttribute('disabled','');
  });
};

const activateSite = () =>{
  formNotice.classList.toggle('ad-form--disabled');
  formFilter.classList.toggle('map__filters--disabled');
  noticeUser.removeAttribute('disabled','');
  filterFeatures.removeAttribute('disabled','');

  noticeUsers.forEach((element) => {
    element.removeAttribute('disabled','');
  });

  filters.forEach((element) => {
    element.removeAttribute('disabled','');
  });
};
export {disableSite};
export {activateSite};
