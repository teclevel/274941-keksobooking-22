import {addMarkers} from './map.js'

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if(response.ok){
      return response.json();
    }
  })
  .then (addMarkers)
  .catch((err) => {
    console.error(err);
  })

