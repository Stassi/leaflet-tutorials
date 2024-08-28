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
  }, {
    'geometry': {
      'coordinates': [[
        [-124.156851, 46.249819],
        [-122.296709, 45.543727],
        [-116.915994, 45.995346],
        [-117.02626, 42.000259],
        [-124.328826, 41.998334],
        [-124.699124, 42.749829],
        [-124.156851, 46.249819],
      ]],
      'type': 'Polygon',
    },
    'properties': {
      'faction': 'Pluralist'
    },
    'type': 'Feature',
  }, {
    'geometry': {
      'coordinates': [[
        [-104.05, 48.99],
        [-97.22, 48.98],
        [-96.58, 45.94],
        [-104.03, 45.94],
        [-104.05, 48.99],
      ]],
      'type': 'Polygon',
    },
    'properties': {
      'faction': 'Reactionary'
    },
    'type': 'Feature',
  }],
  map,
  style: {
    'color': '#ff7800',
    'opacity': 0.65,
    'weight': 5,
  },
});
