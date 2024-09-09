import { map } from '../../../leaflet-adapter/map/map.js';
import {
  tileLayerWms,
} from '../../../leaflet-adapter/tile-layer/web-map-service.js';

tileLayerWms({
  baseUrl: 'https://ows.mundialis.de/services/service?',
  layers: 'TOPO-OSM-WMS',
  map: map({
    center: [-17, -67],
    id: 'map',
    zoom: 3,
  }),
});
