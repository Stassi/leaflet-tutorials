import {
  CrsSimple,
  addMarker,
  addPolyline,
  createMap,
  longitudeLatitude as xy,
  setMapView,
} from '../../../leaflet-adapter/map-utils.js';
import { imageOverlay } from '../../../leaflet-adapter/imageOverlay.js';
import waypoints from '../data/starmap-waypoints.json' with { type: 'json' };

const map = createMap({
  crs: CrsSimple,
  id: 'map',
  zoomMin: -3,
});

imageOverlay({
  bounds: [
    [-25, -26.5],
    [1023, 1021.5],
  ].map(xy),
  imageUrl: 'image/uqm-starmap.png',
  map,
});

setMapView({
  center: xy([120, 70]),
  map,
  zoom: 1,
});

waypoints.forEach(({
  longitudeLatitude,
  name,
}) => {
  addMarker({
    latitudeLongitude: xy(longitudeLatitude),
    map,
    popupContent: name,
  });
});

addPolyline({
  latitudeLongitudes: waypoints
    .filter(
      ({ name }) => ['Deneb', 'Sol'].includes(name)
    ).map(
      ({ longitudeLatitude }) => xy(longitudeLatitude)
    ),
  map,
});
