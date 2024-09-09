import { map } from '../../../leaflet-adapter/map/map.js';
import {
  tileLayerWms,
} from '../../../leaflet-adapter/tile-layer/web-map-service.js';

tileLayerWms({
  baseUrl: 'https://ows.mundialis.de/services/service?',
  layers: 'SRTM30-Colored-Hillshade',
  map: map({
    center: [-17, -67],
    id: 'map',
    zoom: 3,
  }),
});
