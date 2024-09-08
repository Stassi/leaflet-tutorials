import {
  addMarker,
  addTileLayer,
  createWorldLocatorMap,
} from '../../../leaflet-adapter/map-utils.js';
import { circle } from '../../../leaflet-adapter/circle.js';
import {
  attributionOsm,
  urlTemplateOsm,
} from '../../../script/base-layers.js';

const map = createWorldLocatorMap({
  id: 'map',
  setViewOnLocate: true,
  zoomMaxOnLocate: 16,
  onLocate: ({
    accuracy: radius,
    latlng: latitudeLongitude,
  }) => {
    circle({
      latitudeLongitude,
      map,
      radius,
    });

    addMarker({
      latitudeLongitude,
      map,
      popupContent: `You are within ${radius} meters from this point.`
    }).openPopup();
  },
  onLocateError: ({ message }) => {
    alert(message)
  }
});

addTileLayer({
  attribution: attributionOsm,
  map,
  urlTemplate: urlTemplateOsm,
  zoomMax: 19,
});
