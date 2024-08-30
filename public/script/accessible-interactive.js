import {
  addMarker,
  addTileLayer,
  createMap
} from './map-utils.js';
import { attributionOsm, urlTemplateOsm } from './base-layers.js';

const altText = 'Kyiv',
  map = createMap({
    center: [50.4501, 30.5234],
    id: 'map',
    zoom: 4
  });

addMarker({
  altText,
  latitudeLongitude: [50.4501, 30.5234],
  map,
  popupContent: `${altText}, Ukraine is the birthplace of Leaflet!`
});

addTileLayer({
  attribution: attributionOsm,
  map,
  urlTemplate: urlTemplateOsm,
  zoomMax: 19,
});
