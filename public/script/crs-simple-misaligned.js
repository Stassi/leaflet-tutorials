import {
  CrsSimple,
  addImageOverlay,
  createMap,
  fitMapBounds,
} from './map-utils.js';

const mapBoundsOptions = {
  bounds: [
    [0, 0],
    [1000, 1000],
  ],
  map: createMap({
    crs: CrsSimple,
    id: 'map',
  }),
};

addImageOverlay({
  imageUrl: 'image/uqm-map-full.png',
  ...mapBoundsOptions,
})

fitMapBounds(mapBoundsOptions);
