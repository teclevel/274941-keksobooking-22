import {addMarkers} from './map.js'

// const createFetch = (onSuccess, onError) => () =>{
//   return fetch('https://22.javascript.pages.academy/keksobooking/data',
//     {
//       method: 'GET',
//       credentials: 'same-origin',
//     },
//   )
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }

//import { arrayAdvertisements } from "./advertisement";

//       throw new Error(`${response.status} ${response.statusText}`);
//     })
//     .then((json) => {
//       onSuccess(json);
//     })
//     .catch((err) => {
//       onError(err);
//     });
// };

//export {createFetch};
// const fetchAdvertisement = createFetch((dat) => {
//   console.log(dat);
// },

// (err) => {
//   console.log(err);
// });

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

