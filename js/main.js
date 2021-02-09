import {getAdvertisement} from './advertisement.js';

const ADVERTISEMENT_COUNT = 10;
const dataAdvertisements = new Array(ADVERTISEMENT_COUNT).fill(null).map(() => getAdvertisement());
//console.log(dataAdvertisements);
alert(dataAdvertisements);
