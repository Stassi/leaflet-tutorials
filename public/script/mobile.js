import {
  addCircle,
  addMarker,
  addTileLayer,
  createWorldLocatorMap
} from './map-utils.js';
import { attributionOsm, urlTemplateOsm } from './base-layers.js';

const map = createWorldLocatorMap({
  id: 'map',
  setViewOnLocate: true,
  zoomMaxOnLocate: 16,
  onLocate: ({
    accuracy: radius,
    latlng: latitudeLongitude
  }) => {
    addCircle({
      latitudeLongitude,
      map,
      radius
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
  zoomMax: 19
});
