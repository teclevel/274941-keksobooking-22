/* global L:readonly */
/* global _:readonly */
import {toggleSite} from './activation-site.js';
import {createCustomPopup} from './similar-element.js';
import {addressLocation} from './datum-initial.js';
import {getData} from './create-fetch.js'
import {setFilterFormChange, filterAdvertisements} from './filtration.js';

const RERENDER_DELAY = 500;
const NUMBER_ADVERTISEMENTS = 10;

toggleSite(true);

const markersSimilarAd = [];
const addMarkers = (arrayAdvertisements) => {
  arrayAdvertisements
    .filter(filterAdvertisements)
    .slice(0, NUMBER_ADVERTISEMENTS)
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
      markersSimilarAd.push(markerSimilarAd);
    });
};

const removeSimilarAdMarkers = (markers) => {
  markers.forEach((marker) => map.removeLayer(marker));
  markers = [];
};


const map = L.map('map-canvas')
  .on('load', () => {                          //подписка на события. здесь инициализация карты
    toggleSite(false);
    getData((ad) => {
      addMarkers(ad);
      setFilterFormChange( _.debounce(
        () => addMarkers(ad),
        RERENDER_DELAY));
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

let marker;
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

export {deleteMarker, setMainMarker, markersSimilarAd, removeSimilarAdMarkers};
