import { map } from '../../../leaflet-adapter/map/map.js';
import { tileLayer } from '../../../leaflet-adapter/tile-layer/tile-layer.js';
import {
  attributionCarto,
  urlTemplateCarto,
} from '../../../script/base-layers.js';

tileLayer({
  attribution: attributionCarto,
  map: map({
    center: [0, 0],
    id: 'map',
    zoom: 0,
    zoomMax: 0,
    zoomMin: 0,
  }),
  urlTemplate: urlTemplateCarto,
});
