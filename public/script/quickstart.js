import {
  addCircle,
  addMarker,
  addPolygon,
  addPopup,
  addTileLayer,
  createMap
} from './mapUtils.js';

const map = createMap({
  center: [51.505, -0.09],
  id: 'map',
  onClick: ({ latlng: latitudeLongitude }) => {
    addPopup({
      htmlContent: `You clicked the map at ${latitudeLongitude}`,
      latitudeLongitude,
      map
    });
  },
  zoom: 13
});

addTileLayer({
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
  map,
  urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  zoomMax: 19,
});

addMarker({
  latitudeLongitude: [51.5, -0.09],
  map,
  popupContent: '<b>Hello world!</b><br>I am a popup.'
});

addCircle({
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  latitudeLongitude: [51.508, -0.11],
  map,
  popupContent: 'I am a circle.',
  radius: 500
});

addPolygon({
  latitudeLongitudes: [
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ],
  map,
  popupContent: 'I am a polygon.'
});

addPopup({
  htmlContent: 'I am a standalone popup.',
  latitudeLongitude: [51.513, -0.09],
  map
});
