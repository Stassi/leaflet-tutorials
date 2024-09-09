import {
  addTileLayer,
  createMap,
} from '../../../leaflet-adapter-deprecated/leaflet-adapter-deprecated.js';
import { marker } from '../../../leaflet-adapter/marker.js';
import {
  attributionOsm,
  urlTemplateOsm,
} from '../../../script/base-layers.js';

const map = createMap({
  center: [50.4501, 30.5234],
  id: 'map',
  zoom: 4,
});

marker({
  latitudeLongitude: [50.4501, 30.5234],
  map,
});

addTileLayer({
  attribution: attributionOsm,
  map,
  urlTemplate: urlTemplateOsm,
});
