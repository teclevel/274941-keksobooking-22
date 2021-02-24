import { Price } from './datum-initial.js';


const typeHousing = document.querySelector('#type');
const priceHousing = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');


typeHousing.addEventListener('change', () => {
  priceHousing.placeholder = Price[typeHousing.value];
});


const selectTime = (time1, time2) => {
  time1.addEventListener('change', () => {
    time2[time1.selectedIndex].selected = true;
  });
};

selectTime(timeIn, timeOut);
selectTime(timeOut, timeIn);
