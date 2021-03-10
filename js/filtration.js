import {markersSimilarAd} from './map.js';

import {removeSimilarAdMarkers} from './map.js';

const formFiltration =  document.querySelector('.map__filters');
const filterHousing = formFiltration.querySelector('#housing-type');
const filterPrice = formFiltration.querySelector('#housing-price');
const filterRooms = formFiltration.querySelector('#housing-rooms');
const filterGuest = formFiltration.querySelector('#housing-guests');
// const listFilterHousing  = filterHousing.children;
// const listFilterPrice = filterPrice.children;
// const listFilterRooms = filterRooms.children;
// const listFilterGuest = filterGuest.children;
// const listFilterFeatures = formFiltration.querySelectorAll('.checkbox');

// filterPrice.addEventListener('change', () => {});
// filterRooms.addEventListener('change', () => {});
// filterGuest.addEventListener('change', () => {});


// const Offer = {
//   TYPE: house
//   pric: 42000
//   rooms: 3
//   guests: 6
//   features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]


const DefaultValue = {
  ANY_VALUE: 'any',
};

const setFilterHousingChange = (cb) => {
  filterHousing.addEventListener('change', () => {
    removeSimilarAdMarkers(markersSimilarAd);
    cb();
  });
};

const setFilterPriceChange = (cb) => {
  filterPrice.addEventListener('change', () => {
    removeSimilarAdMarkers(markersSimilarAd);
    cb();
  });
};

const setFilterRoomsChange = (cb) => {
  filterRooms.addEventListener('change', () => {
    removeSimilarAdMarkers(markersSimilarAd);
    cb();
  });
};

const setFilterGuestsChange = (cb) => {
  filterGuests.addEventListener('change', () => {
    removeSimilarAdMarkers(markersSimilarAd);
    cb();
  });
};





const filterAdvertisementsAny = (element) => {
  if (filterHousing.value === DefaultValue.ANY_VALUE){
    return element;
  }
};

const filterAdvertisementsOfType = (element) => {
  const {offer} = element
  if (offer.type === filterHousing.value){
    return element;
  }
};

const filterAdvertisementsOfPrice = (element) => {
  const {offer} = element
  if (offer.price === filterPrice.value){
    return element;
  }
};

const filterAdvertisementsOfRooms = (element) => {
  const {offer} = element
  if (offer.filterRooms === filterRooms.value){
    return element;
  }
};

const filterAdvertisementsOfGuest = (element) => {
  const {offer} = element
  if (offer.guests === filterGuest.value){
    return element;
  }
};









export{setFilterHousingChange, setFilterRoomsChange}
export {filterAdvertisementsOfType, filterAdvertisementsOfRooms};
