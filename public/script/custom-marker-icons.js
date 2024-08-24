import {
  addMarker,
  addTileLayer,
  createMap
} from './map-utils.js';
import { attribution, urlTemplate } from './open-street-map.js';

const map = createMap({
  center: [51.5, -0.09],
  id: 'map',
  zoom: 13
});

addMarker({
  iconOptions: {
    iconAnchor: [22, 94],
    iconSize: [38, 95],
    iconUrl: 'image/leaf/green.png',
    popupAnchor: [-3, -76],
    shadowAnchor: [4, 62],
    shadowSize: [50, 64],
    shadowUrl: 'image/leaf/shadow.png'
  },
  latitudeLongitude: [51.5, -0.09],
  map
});

addTileLayer({
  attribution,
  map,
  urlTemplate,
});
