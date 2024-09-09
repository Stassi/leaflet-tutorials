import { map as leafletMap } from '../../../leaflet-adapter/map/map.js';
import { scale } from '../../../leaflet-adapter/control/scale.js';
import { setView } from '../../../leaflet-adapter/map/set-view.js';
import { tileLayer } from '../../../leaflet-adapter/tile-layer/tile-layer.js';
import {
  attributionCarto,
  urlTemplateCarto,
} from '../../../script/base-layers.js';

const map = leafletMap({
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

tileLayer({
  attribution: attributionCarto,
  map,
  urlTemplate: urlTemplateCarto,
});

function panMap(latitude) {
  setView({
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
