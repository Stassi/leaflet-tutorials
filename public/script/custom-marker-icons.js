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

const iconOptions = {
  iconAnchor: [22, 94],
  iconSize: [38, 95],
  popupAnchor: [-3, -76],
  shadowAnchor: [4, 62],
  shadowSize: [50, 64],
  shadowUrl: 'image/leaf/shadow.png',
};

addMarker({
  iconOptions: {
    ...iconOptions,
    iconUrl: 'image/leaf/green.png',
  },
  latitudeLongitude: [51.5, -0.09],
  map
});

addMarker({
  iconOptions: {
    ...iconOptions,
    iconUrl: 'image/leaf/red.png',
  },
  latitudeLongitude: [51.495, -0.083],
  map
});

addTileLayer({
  attribution,
  map,
  urlTemplate,
});
