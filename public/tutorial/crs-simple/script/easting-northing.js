import { imageOverlay } from '../../../leaflet-adapter/image-overlay.js';
import {
  longitudeLatitude as xy,
} from '../../../leaflet-adapter/longitude-latitude.js';
import { map as leafletMap } from '../../../leaflet-adapter/map/map.js';
import { marker } from '../../../leaflet-adapter/marker.js';
import { polyline } from '../../../leaflet-adapter/polyline.js';
import { setView } from '../../../leaflet-adapter/map/set-view.js';
import {
  simple as crs,
} from '../../../leaflet-adapter/coordinate-reference-system/simple.js';
import waypoints from '../data/starmap-waypoints.json' with { type: 'json' };

const map = leafletMap({
  crs,
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

setView({
  center: xy([120, 70]),
  map,
  zoom: 1,
});

waypoints.forEach(({
  longitudeLatitude,
  name,
}) => {
  marker({
    latitudeLongitude: xy(longitudeLatitude),
    map,
    popupContent: name,
  });
});

polyline({
  latitudeLongitudes: waypoints
    .filter(
      ({ name }) => ['Deneb', 'Sol'].includes(name)
    ).map(
      ({ longitudeLatitude }) => xy(longitudeLatitude)
    ),
  map,
});
