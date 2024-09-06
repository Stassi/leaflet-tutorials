import {
  CrsSimple,
  addImageOverlay,
  addMarker,
  createMap,
  setMapView,
} from './map-utils.js';

const map = createMap({
  crs: CrsSimple,
  id: 'map',
  zoomMin: -3,
});

addImageOverlay({
  bounds: [
    [-26.5, -25],
    [1021.5, 1023],
  ],
  imageUrl: 'image/uqm-map-full.png',
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
