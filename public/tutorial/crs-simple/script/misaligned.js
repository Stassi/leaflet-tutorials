import {
  CrsSimple,
  createMap,
  fitMapBounds,
} from '../../../leaflet-adapter/map-utils.js';
import { imageOverlay } from '../../../leaflet-adapter/imageOverlay.js';

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

imageOverlay({
  imageUrl: 'image/uqm-starmap.png',
  ...mapBoundsOptions,
})

fitMapBounds(mapBoundsOptions);
