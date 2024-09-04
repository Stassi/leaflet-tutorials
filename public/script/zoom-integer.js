import {
  addTileLayer,
  createMap,
  setMapZoom,
} from './map-utils.js';
import {
  attributionCarto,
  urlTemplateCarto,
} from './base-layers.js';

const map = createMap({
  center: [0, 0],
  id: 'map',
  zoom: 0,
  zoomMax: 1,
  zoomMin: 0,
});

addTileLayer({
  attribution: attributionCarto,
  map,
  urlTemplate: urlTemplateCarto,
});

function zoomMap(zoom) {
  return setMapZoom({
    map,
    zoom,
  });
}

setInterval(() => {
  zoomMap(0);

  setTimeout(() => {
    zoomMap(1);
  }, 2000);
}, 4000);
