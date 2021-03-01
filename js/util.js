const message = 'Не правильно введены данные';

const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && min < max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  alert(message);
};

const getRandomInclusive = (min, max, digitsAfterPoint) => {
  if (min >= 0 && min < max){
    return parseFloat((Math.random() * (max- min) + min).toFixed(digitsAfterPoint));
  }
  alert(message);
};

const shuffleNewArray = (array) =>{
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  const newArray = array.slice(getRandomIntInclusive(0, array.length-1));
  return newArray;
};

const getRandomLocation = (xMin, xMax, yMin, yMax) =>{
  const x = getRandomInclusive(xMin, xMax, 5);
  const y = getRandomInclusive(yMin, yMax, 5);
  return [x, y];
};

const getRandomElementArray = (array)=> {
  const index = getRandomIntInclusive(0, array.length-1)
  return array[index];
};
//не используется
const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};
//не используется
const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

export {getRandomIntInclusive, shuffleNewArray, getRandomLocation, getRandomElementArray, isEscEvent, isEnterEvent};
