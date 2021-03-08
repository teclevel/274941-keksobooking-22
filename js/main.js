import {setUserFormSubmit} from './user-form.js';
import {openPopupSuccess} from './popup.js';

setUserFormSubmit(openPopupSuccess);

const eatPizza = function () {
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
