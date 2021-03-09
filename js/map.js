/* global L:readonly */
import {toggleSite} from './activation-site.js';
import {createCustomPopup} from './similar-element.js';
import {addressLocation} from './datum-initial.js';
import {getData} from './create-fetch.js'
import {getNumber, setFilterHousingChange, sortAdvertisements} from './filtration.js';


toggleSite(true);
const NUMBER_ADVERTISEMENTS = 10;

//let markerSimilarAd;
const addMarkers = (arrayAdvertisements, numberAd) => {
  // if (!remove){
  // console.log('true')
  arrayAdvertisements
    .slice()
    .sort(sortAdvertisements)
    .slice(0, numberAd)
    .forEach((point) => {
      const {lat, lng} = point.location;

      const icon = L.icon({
        iconUrl: './img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const markerSimilarAd = L.marker(
        {
          lat,
          lng,
        },
        {
          icon,
        },
      );
      markerSimilarAd
        .addTo(map)
        .bindPopup(
          createCustomPopup(point),
          {
            keepInView: true,
          },
        );
    });
};


// const markers = [];

// const removeSimilarAdMarkers = () => {
// markers.forEach((marker) => map.removeLayer(marker));
// markers = [];
// };


let arrayAdvertisements = []
const removeSimilarAdMarkers = (arrayAdvertisements) => {
  arrayAdvertisements.forEach((marker) => {
    const {lat, lng} = marker.location;
    marker =  {
      lat,
      lng,
    }
    console.log(marker)
    map.removeLayer(marker);
    arrayAdvertisements = [];
    console.log(arrayAdvertisements)
  })
};
  // } else {
  //   console.log('false')
  //   arrayAdvertisements.forEach((point) => {
  //     const {lat, lng} = point.location;
  //     markerSimilarAd
  //     map.removeLayer(point)
  //     arrayAdvertisements = [];


//       // const markers = L.layerGroup().addTo(map)
//       // marker.addTo(markers)
//       // markers.clearLayers()
//   });
// }







const map = L.map('map-canvas')
  .on('load', () => {                          //подписка на события. здесь инициализация карты
    toggleSite(false);
    getData((ad) => {
      addMarkers(ad , NUMBER_ADVERTISEMENTS );
      setFilterHousingChange(() => {
        removeSimilarAdMarkers(ad);
        addMarkers(ad, getNumber(ad));
      })
    });
  })
  .setView(
    addressLocation, 10);

L.tileLayer(                                   //добавляет карту от OpenStreetMap
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);



const mainAddress = document.querySelector('#address');
mainAddress.setAttribute('readonly', '');

let marker; //const ???
const setMainMarker = (location) => {

  const mainPinIcon = L.icon({                  //созд главного маркер
    iconUrl: './img/main-pin.svg',
    iconSize: [50, 82],
    iconAnchor: [25, 82],
  });

  marker = L.marker(
    location,
    {
      draggable: true,                           //разрешение на передвижение маркера
      icon: mainPinIcon,
    },
  );
  marker.addTo(map);

  mainAddress.value = `${marker._latlng.lat}, ${marker._latlng.lng}`

  marker.on('moveend', (evt) => {
    const position = evt.target.getLatLng();     //передает координаты маркера
    mainAddress.value = `${position.lat.toFixed(5)}, ${position.lng.toFixed(5)}`;
  });
};

setMainMarker(addressLocation);

const deleteMarker = () => {
  marker.remove();
};

export {deleteMarker, setMainMarker};
