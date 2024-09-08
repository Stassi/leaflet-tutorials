import {
  createMap,
  wmsTileLayer,
} from '../../../leaflet-adapter-deprecated/leaflet-adapter-deprecated.js';

wmsTileLayer({
  baseUrl: 'https://ows.mundialis.de/services/service?',
  layers: 'SRTM30-Colored-Hillshade',
  map: createMap({
    center: [-17, -67],
    id: 'map',
    zoom: 3,
  }),
});
