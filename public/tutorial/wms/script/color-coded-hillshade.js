import {
  createMap,
} from '../../../leaflet-adapter-deprecated/leaflet-adapter-deprecated.js';
import { tileLayerWms } from '../../../leaflet-adapter/tile-layer-wms.js';

tileLayerWms({
  baseUrl: 'https://ows.mundialis.de/services/service?',
  layers: 'SRTM30-Colored-Hillshade',
  map: createMap({
    center: [-17, -67],
    id: 'map',
    zoom: 3,
  }),
});
