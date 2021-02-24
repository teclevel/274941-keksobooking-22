const formAdvertisement = document.querySelector('.ad-form');
const fieldsetUserData = formAdvertisement.querySelector('.ad-form-header');
const fieldsAd = formAdvertisement.querySelectorAll('.ad-form__element');
const formFilter = document.querySelector('.map__filters');
const filters = formFilter.querySelectorAll('.map__filter');
const filterFeatures = formFilter.querySelector('.map__features');


const toggleSite = (state) => {
  formAdvertisement.classList.toggle('ad-form--disabled', state);
  formFilter.classList.toggle('map__filters--disabled', state);
  fieldsetUserData.toggleAttribute('disabled', state);
  filterFeatures.toggleAttribute('disabled', state);

  fieldsAd.forEach((element) => {
    element.toggleAttribute('disabled', state);
  });

  filters.forEach((element) => {
    element.toggleAttribute('disabled', state);
  });
};

export {toggleSite};
