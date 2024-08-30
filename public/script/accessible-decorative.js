import {
  addMarker,
  addTileLayer,
  createMap
} from './map-utils.js';
import { attributionOsm, urlTemplateOsm } from './base-layers.js';

const map = createMap({
  center: [50.4501, 30.5234],
  id: 'map',
  zoom: 4
});

addMarker({
  latitudeLongitude: [50.4501, 30.5234],
  map,
});

addTileLayer({
  attribution: attributionOsm,
  map,
  urlTemplate: urlTemplateOsm,
});
