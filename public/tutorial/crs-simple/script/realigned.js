import {
  CrsSimple,
  createMap,
  setMapView,
} from '../../../leaflet-adapter-deprecated/leaflet-adapter-deprecated.js';
import { imageOverlay } from '../../../leaflet-adapter/image-overlay.js';
import { marker } from '../../../leaflet-adapter/marker.js';

const map = createMap({
  crs: CrsSimple,
  id: 'map',
  zoomMin: -3,
});

imageOverlay({
  bounds: [
    [-26.5, -25],
    [1021.5, 1023],
  ],
  imageUrl: 'image/uqm-starmap.png',
  map,
});

marker({
  latitudeLongitude: [145, 175.2],
  map,
});

setMapView({
  center: [70, 120],
  map,
  zoom: 1,
});
