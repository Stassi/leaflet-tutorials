import {
  addScaleControl,
  addTileLayer,
  createMap,
  setMapView,
} from './map-utils.js';
import {
  attributionCarto,
  urlTemplateCarto,
} from './base-layers.js';

const map = createMap({
  center: [0, 0],
  dragging: false,
  id: 'map',
  zoom: 0,
  zoomMax: 1,
  zoomMin: 1,
});

addScaleControl({
  map,
  maxWidth: 150,
});

addTileLayer({
  attribution: attributionCarto,
  map,
  urlTemplate: urlTemplateCarto,
});

function panMap(latitude) {
  return setMapView({
    center: [latitude, 0],
    map,
    zoom: 0,
    zoomPanOptions: {
      animate: true,
      duration: 1,
    },
  });
}

setInterval(() => {
  panMap(0);

  setTimeout(() => {
    panMap(60);
  }, 2000);
}, 4000);
