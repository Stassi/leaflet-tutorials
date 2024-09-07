import {
  addWmsTileLayer,
  createMap,
} from './map-utils.js';

addWmsTileLayer({
  baseUrl: 'http://ows.mundialis.de/services/service?',
  layers: 'TOPO-OSM-WMS',
  map: createMap({
    center: [-17, -67],
    id: 'map',
    zoom: 3,
  }),
});
