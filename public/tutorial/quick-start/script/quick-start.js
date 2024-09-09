import { circle } from '../../../leaflet-adapter/circle.js';
import { map as leafletMap } from '../../../leaflet-adapter/map/map.js';
import { marker } from '../../../leaflet-adapter/marker.js';
import { polygon } from '../../../leaflet-adapter/polygon.js';
import { popup } from '../../../leaflet-adapter/popup.js';
import { tileLayer } from '../../../leaflet-adapter/tile-layer/tile-layer.js';
import {
  attributionOsm,
  urlTemplateOsm,
} from '../../../script/base-layers.js';

const map = leafletMap({
  center: [51.505, -0.09],
  id: 'map',
  onClick: ({ latlng: latitudeLongitude }) => {
    popup({
      htmlContent: `You clicked the map at ${latitudeLongitude}`,
      latitudeLongitude,
      map,
    });
  },
  zoom: 13,
});

tileLayer({
  attribution: attributionOsm,
  map,
  urlTemplate: urlTemplateOsm,
  zoomMax: 19,
});

marker({
  latitudeLongitude: [51.5, -0.09],
  map,
  popupContent: '<b>Hello world!</b><br>I am a popup.',
});

circle({
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  latitudeLongitude: [51.508, -0.11],
  map,
  popupContent: 'I am a circle.',
  radius: 500,
});

polygon({
  latitudeLongitudes: [
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
  ],
  map,
  popupContent: 'I am a polygon.'
});

popup({
  htmlContent: 'I am a standalone popup.',
  latitudeLongitude: [51.513, -0.09],
  map,
});
