import { fitBounds } from '../../../leaflet-adapter/map/fit-bounds.js';
import { imageOverlay } from '../../../leaflet-adapter/image-overlay.js';
import { map } from '../../../leaflet-adapter/map/map.js';
import {
  simple as crs,
} from '../../../leaflet-adapter/coordinate-reference-system/simple.js';

const mapBoundsOptions = {
  bounds: [
    [0, 0],
    [1000, 1000],
  ],
  map: map({
    crs,
    id: 'map',
  }),
};

imageOverlay({
  imageUrl: 'image/uqm-starmap.png',
  ...mapBoundsOptions,
})

fitBounds(mapBoundsOptions);
