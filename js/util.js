// const message = 'Не правильно введены данные';

// const getRandomIntInclusive = (min, max) => {
//   if (min >= 0 && min < max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   alert(message);
// };

// const getRandomInclusive = (min, max, digitsAfterPoint) => {
//   if (min >= 0 && min < max){
//     return parseFloat((Math.random() * (max- min) + min).toFixed(digitsAfterPoint));
//   }
//   alert(message);
// };

// const shuffleNewArray = (array) =>{
//   for (let i = 0; i < array.length; i++) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   const newArray = array.slice(getRandomIntInclusive(0, array.length-1));
//   return newArray;
// };

// const getRandomLocation = (xMin, xMax, yMin, yMax) =>{
//   const x = getRandomInclusive(xMin, xMax, 5);
//   const y = getRandomInclusive(yMin, yMax, 5);
//   return [x, y];
// };

// const getRandomElementArray = (array)=> {
//   const index = getRandomIntInclusive(0, array.length-1)
//   return array[index];
// };

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

const showMessageError = (textAlert) => {
  const message = document.createElement('div');
  message.textContent = textAlert;
  document.body.append(message);

  message.style.position = 'fixed';
  message.style.zIndex = '1000';
  message.style.top = '20px';
  message.style.left = '0';
  message.style.right = '0';
  message.style.fontSize = '32px'
  message.style.color = 'yellow';
  message.style.textAlign = 'center';
  message.style.padding = '10px 10px';
  message.style.backgroundColor = 'red';

  setTimeout(() => {
    message.remove();
  }, 3000);
};


export {isEscEvent, isEnterEvent, showMessageError};
