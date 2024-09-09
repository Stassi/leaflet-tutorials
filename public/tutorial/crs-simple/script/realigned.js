import { imageOverlay } from '../../../leaflet-adapter/image-overlay.js';
import { map as leafletMap } from '../../../leaflet-adapter/map/map.js';
import { marker } from '../../../leaflet-adapter/marker.js';
import { setView } from '../../../leaflet-adapter/map/set-view.js';
import {
  simple as crs,
} from '../../../leaflet-adapter/coordinate-reference-system/simple.js';

const map = leafletMap({
  crs,
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

setView({
  center: [70, 120],
  map,
  zoom: 1,
});
