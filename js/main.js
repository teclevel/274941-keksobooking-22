import {setUserFormSubmit} from './user-form.js';
import {openPopupSuccess} from './popup.js';

setUserFormSubmit(openPopupSuccess);

/* const eatPizza = function () {
  console.log('Ура! Пицца готова, пора подкрепиться.');
}
const makePizza = function (title, cb) {
  console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`);
  cb()
}

// const readBook = function () {
//   console.log('Читаю книгу «Колдун и кристалл»…');
// }


makePizza('Пеперонни', eatPizza);
//readBook();
 */


/*
const markers = L.layerGroup().addTo(map)
marker.addTo(markers)
markers.clearLayers()

————

let markers = [];

const removeMarkers = () => {
markers.forEach((marker) => map.removeLayer(marker));
markers = [];
};
 */

/*
 const films = [
  {
    id: 0,
    title: 'Die hard'
  },
  {
    id: 1,
    title: 'Terminator'
  }
];

const titles = films.map((film) => {
   return film.title;
});

console.log(titles); // ["Die hard", "Terminator"]

 */
/*
const cities = [
  {name: 'Moscow', population: 12506468},
  {name: 'Saint Petersburg', population: 5351935},
  {name: 'Novosibirsk', population: 1612833},
  {name: 'Kaliningrad', population: 482443},
  {name: 'Kaluga', population: 336726}
];
const millionPlusCities = cities.filter(function (e) {
  return e.population > 1000000;
});
console.log(millionPlusCities);
 */
