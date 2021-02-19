import {disableSite, activateSite} from './activation-site.js';

/* global L:readonly */

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
  iconUrl: './leaflet/images/marker-icon-2x.png',
  iconSize: [50, 82],
  iconAnchor: [25, 82],
  // iconSize: [25, 41],
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

/* const points = [
  {
    title: 'Футура',
    lat: 59.96925,
    lng: 30.31730,
  },
  {
    title: 'Шаверма',
    lat: 59.96783,
    lng: 30.31258,
  },
  {
    title: 'Франк',
    lat: 59.95958,
    lng: 30.30228,
  },
  {
    title: 'Ginza',
    lat: 59.97292,
    lng: 30.31982,
  },
];

points.forEach(({lat, lng}) => {
  const marker = L.marker({
    lat,
    lng,
  });

  marker.addTo(map);
});


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
