import {markersSimilarAd, removeSimilarAdMarkers} from './map.js';

const DefaultValue = {
  ANY_VALUE: 'any',
  MIDDLE_MIN: 10000,
  MIDDLE_MAX: 50000,
  LOW: 10000,
  HIGH: 50000,
};

const formFiltration =  document.querySelector('.map__filters');
const filterHousing = formFiltration.querySelector('#housing-type');
const filterPrice = formFiltration.querySelector('#housing-price');
const filterRooms = formFiltration.querySelector('#housing-rooms');
const filterGuests = formFiltration.querySelector('#housing-guests');
const listFilterFeatures = formFiltration.querySelectorAll('.map__checkbox');


const setFilterFormChange = (cb) => {
  formFiltration.addEventListener('change', () => {
    removeSimilarAdMarkers(markersSimilarAd);
    cb();
  });
};

const isTypeOfHouse = (element) => {
  const {offer} = element;
  return  filterHousing.value === offer.type ||
  filterHousing.value === DefaultValue.ANY_VALUE;
};

const isRoomsInAd = (element) => {
  const {offer} = element;
  return parseInt(filterRooms.value) === offer.rooms ||
  filterRooms.value === DefaultValue.ANY_VALUE;
};

const isGuestsInAd = (element) => {
  const {offer} = element;
  return parseInt(filterGuests.value) === offer.guests ||
  filterGuests.value === DefaultValue.ANY_VALUE;
};

const isPriceOfHouse = (element) => {
  const {offer} = element
  return filterPrice.value === filterPrice[0].value ||
  filterPrice.value === filterPrice[1].value && offer.price > DefaultValue.MIDDLE_MIN && offer.price <= DefaultValue.MIDDLE_MAX ||
  filterPrice.value === filterPrice[2].value && offer.price <= DefaultValue.LOW ||
  filterPrice.value === filterPrice[3].value && offer.price >= DefaultValue.HIGH;
};

const getCheckedFeatures = () => {
  const checkboxesChecked= [];
  for (let element of  listFilterFeatures){
    if (element.checked){
      checkboxesChecked.push(element.value);
    }
  }
  return checkboxesChecked;
};

const  isFeatureInAd = (element) => {
  const {offer} = element;
  const checkedList = getCheckedFeatures()
  return checkedList.every((feature) => offer.features.includes(feature));
};

const filterAdvertisements = (data) => {
  return isTypeOfHouse(data) &&
  isRoomsInAd(data) &&
  isGuestsInAd(data) &&
  isPriceOfHouse(data)
  && isFeatureInAd(data);
};

export {setFilterFormChange, filterAdvertisements};
