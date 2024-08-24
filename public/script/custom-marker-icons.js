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
  map,
  popupContent: 'I am a green leaf.'
});

addMarker({
  iconOptions: {
    ...iconOptions,
    iconUrl: 'image/leaf/orange.png',
  },
  latitudeLongitude: [51.49, -0.1],
  map,
  popupContent: 'I am an orange leaf.'
});

addMarker({
  iconOptions: {
    ...iconOptions,
    iconUrl: 'image/leaf/red.png',
  },
  latitudeLongitude: [51.495, -0.083],
  map,
  popupContent: 'I am a red leaf.'
});

addTileLayer({
  attribution,
  map,
  urlTemplate,
});
