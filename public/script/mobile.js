import {
  addCircle,
  addMarker,
  addTileLayer,
  createWorldLocatorMap
} from './mapUtils.js';
import { attribution, urlTemplate } from './openStreetMap.js';

const map = createWorldLocatorMap({
  id: 'map',
  setViewOnLocate: true,
  zoomMaxOnLocate: 16,
  onLocate: ({
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
  }
});

addTileLayer({
  attribution,
  map,
  urlTemplate,
  zoomMax: 19
});
