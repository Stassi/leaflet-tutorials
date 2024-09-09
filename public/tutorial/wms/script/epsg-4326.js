import {
  createMap,
} from '../../../leaflet-adapter-deprecated/leaflet-adapter-deprecated.js';
import {
  tileLayerWms,
} from '../../../leaflet-adapter/tile-layer/web-map-service.js';
import {
  epsg4326,
} from '../../../leaflet-adapter/coordinate-reference-system/epsg-4326.js';

tileLayerWms({
  baseUrl: 'https://ows.mundialis.de/services/service?',
  layers: 'TOPO-OSM-WMS',
  map: createMap({
    center: [0, 0],
    crs: epsg4326,
    id: 'map',
    zoom: 1,
  }),
});
