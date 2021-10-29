/* global L:readonly */
/* global _:readonly */
import {toggleFilters, toggleFormAd} from './activation-site.js';
import {createCustomPopup} from './similar-element.js';
import {addressLocation} from './datum-initial.js';
import {getData} from './create-fetch.js'
import {setFilterFormChange, filterAdvertisements} from './filtration.js';

const RERENDER_DELAY = 500;
const NUMBER_ADVERTISEMENTS = 10;


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
        .bindPopup(                                     //привязка балуна
          createCustomPopup(point),
          {
            keepInView: true,                            //перемещение карты если не влезает балун
          },
        );
      markersSimilarAd.push(markerSimilarAd);
    });
};

const removeSimilarAdMarkers = (markers) => {
  markers.forEach((marker) => map.removeLayer(marker));
  markers = [];
};

toggleFormAd(true);
toggleFilters(true);

const map = L.map('map-canvas')                  // 1.создание карты в блоке map-canvas
  .on('load', () => {                            //подписка на события. здесь инициализация карты
    toggleFormAd(false);
    toggleFilters(false);
    getData((ad) => {
      addMarkers(ad);
      setFilterFormChange( _.debounce(
        () => addMarkers(ad),
        RERENDER_DELAY));
    });
  })
  .setView(                                        // центр карты и масштаб.
    addressLocation, 10);

L.tileLayer(                                      //2. добавляет слои карты от OpenStreetMap
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
const mainAddress = document.querySelector('#address');
mainAddress.setAttribute('readonly', '');

let marker;
const setMainMarker = (location) => {

  const mainPinIcon = L.icon({                  //замена  главного маркер на свой
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  marker = L.marker(                             // создание маркера
    location,
    {
      draggable: true,                           //разрешение на передвижение маркера
      icon: mainPinIcon,                         //для замены маркера
    },
  );
  marker.addTo(map);                             // поместить маркер на карту

  mainAddress.value = `${marker._latlng.lat}, ${marker._latlng.lng}`

  marker.on('moveend', (evt) => {
    const position = evt.target.getLatLng();     //передает координаты маркера после перемещения
    mainAddress.value = `${position.lat.toFixed(5)}, ${position.lng.toFixed(5)}`;
  });
};

setMainMarker(addressLocation);

const deleteMarker = () => {
  marker.remove();
};

export {deleteMarker, setMainMarker, markersSimilarAd, removeSimilarAdMarkers};
