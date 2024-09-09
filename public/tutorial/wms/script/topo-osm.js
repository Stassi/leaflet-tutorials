import {
  createMap,
} from '../../../leaflet-adapter-deprecated/leaflet-adapter-deprecated.js';
import { tileLayerWms } from '../../../leaflet-adapter/tile-layer-wms.js';

tileLayerWms({
  baseUrl: 'https://ows.mundialis.de/services/service?',
  layers: 'TOPO-OSM-WMS',
  map: createMap({
    center: [-17, -67],
    id: 'map',
    zoom: 3,
  }),
});
