import {
  createMap,
  wmsTileLayer,
} from '../../../script/map-utils.js';

wmsTileLayer({
  baseUrl: 'https://ows.mundialis.de/services/service?',
  layers: 'SRTM30-Colored-Hillshade',
  map: createMap({
    center: [-17, -67],
    id: 'map',
    zoom: 3,
  }),
});
