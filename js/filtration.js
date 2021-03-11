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
// const listFilterHousing  = filterHousing.children;
// const listFilterPrice = filterPrice.children;
// const listFilterRooms = filterRooms.children;
// const listFilterGuest = filterGuest.children;
// const listFilterFeatures = formFiltration.querySelectorAll('.checkbox');


// filterPrice.addEventListener('change', () => {});
// filterRooms.addEventListener('change', () => {});
// filterGuest.addEventListener('change', () => {});


const setFilterHousingChange = (cb) => {
  filterHousing.addEventListener('change', () => {
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

const setFilterPriceChange = (cb) => {
  filterPrice.addEventListener('change', () => {
    removeSimilarAdMarkers(markersSimilarAd);
    cb();
  });
};
// const Offer = {
//   TYPE: house
//   price: 42000
//   rooms: 3
//   guests: 6
//   features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]

//Общий фильтр
const filterAdvertisements = (element) => {
  //console.log(filterAdvertisementsOfGuests(element))
  // return filterAdvertisementsOfType(element)
  // return filterAdvertisementsOfRooms(element)
  // return filterAdvertisementsOfGuests(element)
  return filterAdvertisementsOfPrice(element)
};


//Фильтр по типу жилья
const filterAdvertisementsOfType = (element) => {
  const {offer} = element;
  if (filterHousing.value === offer.type){
    return element;
  }
  if (filterHousing.value === DefaultValue.ANY_VALUE){
    return element;
  }
};
//Фильтр по кол-ву комнат
const filterAdvertisementsOfRooms = (element) => {
  const {offer} = element
  if (parseInt(filterRooms.value) === offer.rooms){
    return element;
  }
  if (filterRooms.value === DefaultValue.ANY_VALUE){
    return element;
  }
};
//Фильтр по количеству гостей
const filterAdvertisementsOfGuests = (element) => {
  const {offer} = element
  console.log(`${filterGuests.value} ${offer.guests}`)
  if (parseInt(filterGuests.value) === offer.guests){
    return element;
  }
  if (filterGuests.value === DefaultValue.ANY_VALUE){
    return element;
  }
};
// const filterAdvertisementsAny = (element) => {
//   if (filterHousing.value === DefaultValue.ANY_VALUE){
//     return element;
//   }
// };


//   ANY_VALUE: 'any',
//   MIDDLE_MIN: 10000,
//   MIDDLE_MAX: 50000,
//   LOW: 10000,
//   HIGH: 50000,



//Фильтр по цене
const filterAdvertisementsOfPrice = (element) => {
  const {offer} = element
// console.log(typeof offer.price)
// console.log(typeof +filterPrice.value)
const filterRooms = 
  if (filterRooms=== &&  offer.price === 1){
    return element;
  }
  //  case DefaultValue.LOW > offer.price:
  //     return element;
  //   case DefaultValue.MIDDLE_MIN:
  //   case DefaultValue.MIDDLE_MAX:
  //   case DefaultValue.HIGH:
};

export{setFilterHousingChange, setFilterPriceChange, setFilterRoomsChange, setFilterGuestsChange}
export {filterAdvertisements};
