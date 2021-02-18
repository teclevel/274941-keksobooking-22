/* global L:readonly */
const map= L.map('map-canvas')
.on('load', () => {
  console.log('Карта инициализирована')
})
  .setView({
    lat: 35.68170,
    lng: 139.75388,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const marker = L.marker(
  {
    lat: 35.68170,
    lng: 139.75388,
  },
/*   {
    draggable: true, //передвижение маркера
  }, */
);

marker.addTo(map);

