import {
  createMap,
  setMapZoom,
} from '../../../script/map-utils.js';
import { addCartoTileLayerWithZoomLevelControl } from './zoom.js';

const map = createMap({
  center: [0, 0],
  dragging: false,
  id: 'map',
  zoom: 0,
  zoomMax: 1,
  zoomMin: 0,
  zoomSnap: 0.25,
});

addCartoTileLayerWithZoomLevelControl(map);

function zoomCycle() {
  [
    0,
    0.25,
    0.50,
    0.75,
    1.00,
    0.75,
    0.50,
    0.25,
  ].forEach((zoom, index) => {
    setTimeout(
      () => {
        setMapZoom({
          map,
          zoom,
        });
      },
      index * 1000,
    );
  });
}

zoomCycle();
setInterval(zoomCycle, 8000);
