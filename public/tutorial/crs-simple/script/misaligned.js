import {
  CrsSimple,
  addImageOverlay,
  createMap,
  fitMapBounds,
} from '../../../leaflet-adapter/map-utils.js';

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
  imageUrl: 'image/uqm-starmap.png',
  ...mapBoundsOptions,
})

fitMapBounds(mapBoundsOptions);
