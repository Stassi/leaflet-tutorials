import {
  createWorldLocatorMap,
} from '../../../leaflet-adapter-deprecated/leaflet-adapter-deprecated.js';
import { circle } from '../../../leaflet-adapter/circle.js';
import { marker } from '../../../leaflet-adapter/marker.js';
import { tileLayer } from '../../../leaflet-adapter/tile-layer/tile-layer.js';
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

    marker({
      latitudeLongitude,
      map,
      popupContent: `You are within ${radius} meters from this point.`
    }).openPopup();
  },
  onLocateError: ({ message }) => {
    alert(message)
  }
});

tileLayer({
  attribution: attributionOsm,
  map,
  urlTemplate: urlTemplateOsm,
  zoomMax: 19,
});
