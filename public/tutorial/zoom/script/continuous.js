import { map as leafletMap } from '../../../leaflet-adapter/map/map.js';
import { setZoom } from '../../../leaflet-adapter/map/zoom.js';
import { addCartoTileLayerWithZoomLevelControl } from './zoom.js';

const map = leafletMap({
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
        setZoom({
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
