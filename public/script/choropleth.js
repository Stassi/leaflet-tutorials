import {
  addGeoJson,
  addTileLayer,
  createMap,
} from './map-utils.js';
import { attribution, urlTemplate } from './open-street-map.js';
import data
  from '../data/us-state-population-density.json' with { type: 'json' };

const map = createMap({
  center: [37.8, -96],
  id: 'map',
  zoom: 4
});

addTileLayer({
  attribution,
  map,
  urlTemplate,
  zoomMax: 19,
});

addGeoJson({
  data,
  map,
});
