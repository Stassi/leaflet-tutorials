import {
  addGeoJson,
  addTileLayer,
  createMap,
} from './map-utils.js';
import { attribution, urlTemplate } from './open-street-map.js';

const map = createMap({
  center: [39.74739, -105],
  id: 'map',
  zoom: 13
});

addTileLayer({
  attribution,
  map,
  urlTemplate,
  zoomMax: 19,
});

addGeoJson({
  data: [{
    'geometry': {
      'coordinates': [-104.99404, 39.75621],
      'type': 'Point'
    },
    'properties': {
      'amenity': 'Baseball Stadium',
      'name': 'Coors Field',
      'popupContent': 'This is where the Rockies play!'
    },
    'type': 'Feature',
  }, {
    'coordinates': [
      [-100, 40],
      [-105, 45],
      [-110, 55],
    ],
    'type': 'LineString',
  }, {
    'coordinates': [
      [-105, 40],
      [-110, 45],
      [-115, 55],
    ],
    'type': 'LineString',
  }],
  map,
  style: {
    'color': '#ff7800',
    'opacity': 0.65,
    'weight': 5,
  },
});
