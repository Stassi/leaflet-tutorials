import {
  CrsEpsg4326,
  createMap,
  wmsTileLayer,
} from '../../../leaflet-adapter/map-utils.js';

wmsTileLayer({
  baseUrl: 'https://ows.mundialis.de/services/service?',
  layers: 'TOPO-OSM-WMS',
  map: createMap({
    center: [0, 0],
    crs: CrsEpsg4326,
    id: 'map',
    zoom: 1,
  }),
});
