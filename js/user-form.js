import { Price } from './datum-initial.js';
import {getValueMap} from './util.js';


const typeHousing = document.querySelector('#type');
let priceHousing = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');


typeHousing.onchange = () => {
  priceHousing.placeholder = getValueMap(Price, typeHousing.value);
};

const selectTime = (time1, time2) => {
  time1.onchange = () => {
    for(let i = 0; i < time1.length; i++){
      if (time1[i].selected){
        time2[i].selected = true;
      }
    }
  };
};

selectTime(timeIn, timeOut);
selectTime(timeOut, timeIn);
