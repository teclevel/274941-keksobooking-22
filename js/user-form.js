import { Price } from './datum-initial.js';


const typeHousing = document.querySelector('#type');
const priceHousing = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const price = Price[typeHousing.value];
priceHousing.placeholder = price;

typeHousing.addEventListener('change', () => {
  priceHousing.placeholder = Price[typeHousing.value]
  priceHousing.value = priceHousing.placeholder;
});

priceHousing.addEventListener('change', () => {
  //console.log('сработало')
  let minPrice = priceHousing.placeholder;
  if (priceHousing.value < minPrice){
    priceHousing.value = minPrice;
    //console.log(priceHousing.value, minPrice)
  }
});


const selectTime = (time1, time2) => {
  time1.addEventListener('change', () => {
    time2[time1.selectedIndex].selected = true;
  });
};

selectTime(timeIn, timeOut);
selectTime(timeOut, timeIn);
