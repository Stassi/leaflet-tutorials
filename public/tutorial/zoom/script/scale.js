import {
  addTileLayer,
  createMap,
  setMapView,
} from '../../../leaflet-adapter/map-utils.js';
import { scale } from '../../../leaflet-adapter/control/scale.js';
import {
  attributionCarto,
  urlTemplateCarto,
} from '../../../script/base-layers.js';

const map = createMap({
  center: [0, 0],
  dragging: false,
  id: 'map',
  zoom: 0,
  zoomMax: 1,
  zoomMin: 1,
});

scale({
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
