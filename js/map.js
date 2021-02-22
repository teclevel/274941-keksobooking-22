/* global L:readonly */
import {disableSite, activateSite} from './activation-site.js';
import {arrayAdvertisements} from './advertisement.js';
import {createCustomPopup} from './similar-element.js';
disableSite();

const map = L.map('map-canvas')
  .on('load', () => {                          //подписка на события. здесь инициализация карты
    activateSite();
  })
  .setView({
    lat: 35.68170,
    lng: 139.75388,
  }, 10);

L.tileLayer(                                   //добавляет карту от OpenStreetMap
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [50, 82],
  iconAnchor: [25, 82],
});

const marker = L.marker(                       //маркер Токио
  {
    lat: 35.68170,
    lng: 139.75388,
  },
  {
    draggable: true,                           //разрешение на передвижение маркера
    icon: mainPinIcon,
  },
);

marker.addTo(map);

const mainAddress = document.querySelector('#address');
mainAddress.value = `${marker._latlng.lat}, ${marker._latlng.lng}`
mainAddress.setAttribute('readonly', '');

marker.on('moveend', (evt) => {
  const position = evt.target.getLatLng();     //передает координаты маркера
  mainAddress.value = `${position.lat.toFixed(5)}, ${position.lng.toFixed(5)}`;
});

//marker.remove();                            //удаление маркера

arrayAdvertisements.forEach((point) => {
  const {x:lat, y:lng} = point.location;

  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
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
    .bindPopup(
      createCustomPopup(point),
      {
        keepInView: true,
      },
    );
});
