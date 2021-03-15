import {toggleFilters} from './activation-site.js';
import {showMessageError} from './util.js';

const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then(onSuccess)

    .catch(() => {
      showMessageError('Ошибка получения данных');
      toggleFilters(true);
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
    .catch(() => {
      showMessageError('Ошибка отправления данных')
    });
};

export {getData, sendData};
