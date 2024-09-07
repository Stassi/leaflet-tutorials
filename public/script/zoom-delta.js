import { createMap } from './map-utils.js';
import { addCartoTileLayerWithZoomLevelControl } from './zoom.js';

addCartoTileLayerWithZoomLevelControl(
  createMap({
    center: [0, 0],
    id: 'map',
    zoom: 0,
    zoomDelta: 0.25,
    zoomMax: 18,
    zoomMin: 0,
    zoomSnap: 0,
  })
);
