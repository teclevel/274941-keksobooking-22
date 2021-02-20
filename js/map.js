/* global L:readonly */
import {disableSite, activateSite} from './activation-site.js';
import {arrayAdvertisements} from './advertisement.js';

disableSite();

const map = L.map('map-canvas')
  .on('load', () => {                          //подписка на события. здесь инициализация карты
    activateSite();
  })
  .setView({
    lat: 35.68170,
    lng: 139.75388,
  }, 10);

L.tileLayer(                                //добавляет карту от OpenStreetMap
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [50, 82],
  iconAnchor: [25, 82],
  // iconSize: [24, 41],
  // iconAnchor: [12, 41],
});

const marker = L.marker(
  {
    lat: 35.68170,
    lng: 139.75388,
  },
  {
    draggable: true,                           //передвижение маркера
    icon: mainPinIcon,
  },
);

marker.addTo(map);

const mainAddress = document.querySelector('#address');
mainAddress.value = marker._latlng.lat +', '+ marker._latlng.lng

marker.on('moveend', (evt) => {
  const position = evt.target.getLatLng();     //передает координаты маркера
  mainAddress.value = position.lat.toFixed(5) + ', ' + position.lng.toFixed(5);
  mainAddress.setAttribute('readonly', '');
});

//marker.remove();                            //удаление маркера

console.log(arrayAdvertisements)

arrayAdvertisements.forEach(({location}) => {
  const pinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [50, 82],
    iconAnchor: [25, 82],
    // iconSize: [24, 41],
    // iconAnchor: [12, 41],
  });

  const marker = L.marker(
    [location.x, location.y],
    {
      pinIcon,
    },

  );

  marker.addTo(map);
});

/* points.forEach(({lat, lng}) => {
  const marker = L.marker({
    lat,
    lng,
  });

  marker.addTo(map);
}); */

/*
points.forEach(({lat, lng, title}) => {
  const icon = L.icon({
    iconUrl: './leaflet/images/marker-icon.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(title);
}); */
