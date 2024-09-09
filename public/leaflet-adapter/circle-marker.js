import {
  circleMarker as leafletCircleMarker,
} from '../leaflet/leaflet-src.esm.js';

export function circleMarker({
  color,
  fillColor,
  fillOpacity,
  latitudeLongitude,
  opacity,
  radius,
  weight,
}) {
  return leafletCircleMarker(
    latitudeLongitude,
    {
      color,
      fillColor,
      fillOpacity,
      opacity,
      radius,
      weight,
    },
  );
}
