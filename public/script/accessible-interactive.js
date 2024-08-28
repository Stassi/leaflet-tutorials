import {
  addMarker,
  addTileLayer,
  createMap
} from './map-utils.js';
import { attribution, urlTemplate } from './open-street-map.js';

const altText = 'Kyiv',
  map = createMap({
    center: [50.4501, 30.5234],
    id: 'map',
    zoom: 4
  });

addMarker({
  altText,
  latitudeLongitude: [50.4501, 30.5234],
  map,
  popupContent: `${altText}, Ukraine is the birthplace of Leaflet!`
});

addTileLayer({
  attribution,
  map,
  urlTemplate,
  zoomMax: 19,
});
