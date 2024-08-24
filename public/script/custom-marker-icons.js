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

addTileLayer({
  attribution,
  map,
  urlTemplate,
});

[
  {
    iconUrl: 'image/leaf/green.png',
    latitudeLongitude: [51.5, -0.09],
    popupContent: 'I am a green leaf.'
  },
  {
    iconUrl: 'image/leaf/orange.png',
    latitudeLongitude: [51.49, -0.1],
    popupContent: 'I am an orange leaf.'
  },
  {
    iconUrl: 'image/leaf/red.png',
    latitudeLongitude: [51.495, -0.083],
    popupContent: 'I am a red leaf.'
  }
].forEach(({
  iconUrl,
  latitudeLongitude,
  popupContent
}) => {
  addMarker({
    iconOptions: {
      iconAnchor: [22, 94],
      iconSize: [38, 95],
      iconUrl,
      popupAnchor: [-3, -76],
      shadowAnchor: [4, 62],
      shadowSize: [50, 64],
      shadowUrl: 'image/leaf/shadow.png',
    },
    latitudeLongitude,
    map,
    popupContent,
  });
});
