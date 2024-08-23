import { addTileLayer, createWorldMap } from './mapUtils.js';
import { attribution, urlTemplate } from './openStreetMap.js';

const map = createWorldMap('map')
  .locate({
    maxZoom: 16,
    setView: true
  });

addTileLayer({
  attribution,
  map,
  urlTemplate,
  zoomMax: 19
});
