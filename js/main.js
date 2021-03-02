import {setUserFormSubmit} from './user-form.js';
import {openPopupSuccess} from './popup.js';
import {getData} from './create-fetch.js';
import {addMarkers} from './map.js'

setUserFormSubmit(openPopupSuccess);
getData(addMarkers);
