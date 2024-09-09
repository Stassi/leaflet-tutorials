import { circle as leafletCircle } from '../leaflet/leaflet-src.esm.js';

export function circle({
  color = '#3388ff',
  fillColor = '#3388ff',
  fillOpacity = 0.2,
  latitudeLongitude,
  map,
  popupContent,
  radius,
}) {
  const created = leafletCircle(
    latitudeLongitude,
    {
      color,
      fillColor,
      fillOpacity,
      radius,
    },
  ), conditionallyRendered = map
    ? created.addTo(map)
    : created;

  return popupContent
    ? conditionallyRendered.bindPopup(popupContent)
    : conditionallyRendered;
}
