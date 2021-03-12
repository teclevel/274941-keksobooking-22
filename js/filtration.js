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
// const listFilterFeatures = formFiltration.querySelectorAll('.map__checkbox');


// const  getCheckedCheckBoxes = (list) => {
//   const checkboxesChecked = [];
//   for (let index = 0; index < list.length; index++) {
//     if (list[index].checked) {
//       checkboxesChecked.push(list[index].value);
//     }
//   }
//   console.log(checkboxesChecked)
//   return checkboxesChecked;
// }
// getCheckedCheckBoxes(listFilterFeatures);

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

// const setFilterFeaturesChange = (cb) => {
//   for(const element of listFilterFeatures) {
//     element.addEventListener('change', () => {
//       removeSimilarAdMarkers(markersSimilarAd);
//       console.log('checked')
//       cb();
//     });
//   }
// };


//для примера
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word =>{
//   console.log(word.length > 6)
// } );
// console.log(result)

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
  if (parseInt(filterGuests.value) === offer.guests){
    return element;
  }
  if (filterGuests.value === DefaultValue.ANY_VALUE){
    return element;
  }
};

//Фильтр по цене

const filterAdvertisementsOfPrice = (element) => {
  const {offer} = element
  if(filterPrice.value === filterPrice[0].value){
    return element;
  }
  if(filterPrice.value === filterPrice[1].value && offer.price > DefaultValue.MIDDLE_MIN && offer.price <= DefaultValue.MIDDLE_MAX){
    return element;
  }
  if(filterPrice.value === filterPrice[2].value && offer.price <= DefaultValue.LOW){
    return element;
  }
  if(filterPrice.value === filterPrice[3].value && offer.price >= DefaultValue.HIGH){
    return element;
  }
};


// Фильтр удобств

// const filterAdvertisementsOfFeatures = (element) => {
//   const {offer} = element;


//   return offer.features.filter()

// };

// console.log()
//   features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]


// const filterAdvertisements = () => {
//   filterAdvertisementsOfType
//   filterAdvertisementsOfPrice
//   filterAdvertisementsOfRooms
//   filterAdvertisementsOfGuests
// };


export{setFilterHousingChange, setFilterPriceChange, setFilterRoomsChange, setFilterGuestsChange/* , setFilterFeaturesChange */}
export{filterAdvertisementsOfType, filterAdvertisementsOfPrice, filterAdvertisementsOfRooms, filterAdvertisementsOfGuests/* , filterAdvertisementsOfFeatures */}
