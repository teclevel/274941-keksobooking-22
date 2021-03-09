import {deleteSimilarAdMarker} from './map.js';

//import { addMarkers } from "./map.js";

const formFiltration =  document.querySelector('.map__filters');
const filterHousing = formFiltration.querySelector('#housing-type');
// const filterPrice = formFiltration.querySelector('#housing-price');
// const filterRooms = formFiltration.querySelector('#housing-rooms');
// const filterGuest = formFiltration.querySelector('#housing-guests');
// const listFilterHousing  = filterHousing.children;
// const listFilterPrice = filterPrice.children;
// const listFilterRooms = filterRooms.children;
// const listFilterGuest = filterGuest.children;
// const listFilterFeatures = formFiltration.querySelectorAll('.checkbox');

// const Default = {
//   ANY_VALUE: 'any',
// };
const setFilterHousingChange = (cb) => {
  filterHousing.addEventListener('change', () => {
    //deleteSimilarAdMarker();
    cb();
  });

};
// filterPrice.addEventListener('change', () => {});
// filterRooms.addEventListener('change', () => {});
// filterGuest.addEventListener('change', () => {});


// offer: {a
//   type: "house"
//   price: 42000
//   rooms: 3
//   guests: 6
//   features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]

//
const getNumber = (advertisements) => {
  let numberSimilarAd = 0;
  advertisements.forEach(element => {
    const {offer} = element;
    if (offer.type === filterHousing.value){
      numberSimilarAd += 1;
    }
  });
  console.log(numberSimilarAd);
  return numberSimilarAd;
};



const getAdvertisementRank = (advertisements) => {
  const {offer} = advertisements;
  let rank = 0;

  if (offer.type === filterHousing.value){ // || Default.ANY_VALUE
    rank += 1;
    //numberSimilarAd += 1

  }

  // if (offer.price === ){
  // }

  // if (offer.rooms === filterRooms.value){
  //   rank += 1;
  // }

  // if (offer.guests === filterGuest.value){
  //   rank += 1;
  // }
  return rank;
};




const sortAdvertisements = (advertisementA, advertisementB) => {
  const rankA = getAdvertisementRank(advertisementA);
  const rankB = getAdvertisementRank(advertisementB);
  return rankB - rankA;
};


export{sortAdvertisements, setFilterHousingChange};
export{getNumber};
