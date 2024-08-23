import { addTileLayer, createWorldMap } from './mapUtils.js';
import { attribution, urlTemplate } from './openStreetMap.js';

const map = createWorldMap('map');

addTileLayer({
  attribution,
  map,
  urlTemplate,
  zoomMax: 19
});
