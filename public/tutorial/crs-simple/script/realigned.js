import {
  CrsSimple,
  addMarker,
  createMap,
  setMapView,
} from '../../../leaflet-adapter/map-utils.js';
import { imageOverlay } from '../../../leaflet-adapter/image-overlay.js';

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

addMarker({
  latitudeLongitude: [145, 175.2],
  map,
});

setMapView({
  center: [70, 120],
  map,
  zoom: 1,
});
