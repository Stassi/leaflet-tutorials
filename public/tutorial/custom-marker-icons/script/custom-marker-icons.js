import { map as leafletMap } from '../../../leaflet-adapter/map/map.js';
import { marker } from '../../../leaflet-adapter/marker.js';
import { tileLayer } from '../../../leaflet-adapter/tile-layer/tile-layer.js';
import {
  attributionOsm,
  urlTemplateOsm,
} from '../../../script/base-layers.js';

const map = leafletMap({
  center: [51.5, -0.09],
  id: 'map',
  zoom: 13,
});

tileLayer({
  attribution: attributionOsm,
  map,
  urlTemplate: urlTemplateOsm,
});

[
  {
    iconUrl: 'image/green.png',
    latitudeLongitude: [51.5, -0.09],
    popupContent: 'I am a green leaf.',
  },
  {
    iconUrl: 'image/orange.png',
    latitudeLongitude: [51.49, -0.1],
    popupContent: 'I am an orange leaf.',
  },
  {
    iconUrl: 'image/red.png',
    latitudeLongitude: [51.495, -0.083],
    popupContent: 'I am a red leaf.',
  }
].forEach(({
  iconUrl,
  latitudeLongitude,
  popupContent,
}) => {
  marker({
    iconOptions: {
      iconAnchor: [22, 94],
      iconSize: [38, 95],
      iconUrl,
      popupAnchor: [-3, -76],
      shadowAnchor: [4, 62],
      shadowSize: [50, 64],
      shadowUrl: 'image/shadow.png',
    },
    latitudeLongitude,
    map,
    popupContent,
  });
});
