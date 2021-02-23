const formAdvertisement = document.querySelector('.ad-form');
const fieldsetUserData = formAdvertisement.querySelector('.ad-form-header');
const fieldsAd = formAdvertisement.querySelectorAll('.ad-form__element');
const formFilter = document.querySelector('.map__filters');
const filters = formFilter.querySelectorAll('.map__filter');
const filterFeatures = formFilter.querySelector('.map__features');


const disableSite = () => {
  formAdvertisement.classList.add('ad-form--disabled');
  formFilter.classList.add('map__filters--disabled');
  fieldsetUserData.setAttribute('disabled','');
  filterFeatures.setAttribute('disabled','');

  fieldsAd.forEach((element) => {
    element.setAttribute('disabled','');
  });

  filters.forEach((element) => {
    element.setAttribute('disabled','');
  });
};

const activateSite = () => {
  formAdvertisement.classList.toggle('ad-form--disabled');
  formFilter.classList.toggle('map__filters--disabled');
  fieldsetUserData.removeAttribute('disabled','');
  filterFeatures.removeAttribute('disabled','');

  fieldsAd.forEach((element) => {
    element.removeAttribute('disabled','');
  });

  filters.forEach((element) => {
    element.removeAttribute('disabled','');
  });
};


export {disableSite};
export {activateSite};


// Для соединения 2 ф-ий
/*
const toggleSite = (activate) => {
  if (activate   ){
    formAdvertisement.classList.toggle('ad-form--disabled');
    formFilter.classList.toggle('map__filters--disabled');
    fieldsetUserData.removeAttribute('disabled','');
    filterFeatures.removeAttribute('disabled','');

    fieldsAd.forEach((element) => {
      element.removeAttribute('disabled','');
    });

    filters.forEach((element) => {
      element.removeAttribute('disabled','');
    });
  }

  formAdvertisement.classList.add('ad-form--disabled');
  formFilter.classList.add('map__filters--disabled');
  fieldsetUserData.setAttribute('disabled','');
  filterFeatures.setAttribute('disabled','');


  fieldsAd.forEach((element) => {
    element.setAttribute('disabled','');
  });

  filters.forEach((element) => {
    element.setAttribute('disabled','');
  });
};

const activateSite = toggleSite();
const disableSite = toggleSite();
 */

