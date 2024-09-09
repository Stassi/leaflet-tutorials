import {
  createMap,
} from '../../../leaflet-adapter-deprecated/leaflet-adapter-deprecated.js';
import { marker } from '../../../leaflet-adapter/marker.js';
import { tileLayer } from '../../../leaflet-adapter/tile-layer/tile-layer.js';
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

tileLayer({
  attribution: attributionOsm,
  map,
  urlTemplate: urlTemplateOsm,
});
