import {
  addTileLayer,
  createMap,
} from './map-utils.js';
import {
  attributionCarto,
  urlTemplateCarto,
} from './base-layers.js';

addTileLayer({
  attribution: attributionCarto,
  map: createMap({
    center: [0, 0],
    id: 'map',
    zoom: 0,
    zoomMax: 0,
    zoomMin: 0,
  }),
  urlTemplate: urlTemplateCarto,
});
