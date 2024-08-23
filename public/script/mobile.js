import {
  addCircle,
  addMarker,
  addTileLayer,
  createWorldMap
} from './mapUtils.js';
import { attribution, urlTemplate } from './openStreetMap.js';

const map = createWorldMap('map')
  .locate({
    maxZoom: 16,
    setView: true
  }).on('locationfound', ({
    accuracy: radius,
    latlng: latitudeLongitude
  }) => {
    addCircle({
      latitudeLongitude,
      map,
      radius
    })

    addMarker({
      latitudeLongitude,
      map,
      popupContent: `You are within ${radius} meters from this point.`
    }).openPopup();
  });

addTileLayer({
  attribution,
  map,
  urlTemplate,
  zoomMax: 19
});
