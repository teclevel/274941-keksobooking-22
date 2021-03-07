// const listFilterHousing  = filterHousing.children;
// const listFilterPrice = filterPrice.children;
// const listFilterRooms = filterRooms.children;
// const listFilterGuest = filterGuest.children;
// const listFilterFeatures = formFiltration.querySelectorAll('.checkbox');

const Default = {
  ANY_VALUE: 'any',
};

// filterHousing.addEventListener('change', () => {});
// filterPrice.addEventListener('change', () => {});
// filterRooms.addEventListener('change', () => {});
// filterGuest.addEventListener('change', () => {});


// offer: {a
//   type: "house"
//   price: 42000
//   rooms: 3
//   guests: 6
//   features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]

const getAdvertisementRank = (advertisements) => {
  const formFiltration =  document.querySelector('#map__filters');
  const filterHousing = formFiltration.querySelector('#housing-type');
  // const filterPrice = formFiltration.querySelector('#housing-prise');
  const filterRooms = formFiltration.querySelector('#housing-rooms');
  const filterGuest = formFiltration.querySelector('#housing-guests');
  const {offer} = advertisements;
  let rank = 0;
  if (offer.type === filterHousing.value || Default.ANY_VALUE){
    rank += 1;
  }

  // if (offer.price === ){
  // }

  if (offer.rooms === filterRooms.value || Default.ANY_VALUE){
    rank += 1;
  }

  if (offer.guests === filterGuest.value || Default.ANY_VALUE){
    rank += 1;
  }

  return rank
}
