import { popup as leafletPopup } from '../leaflet/leaflet-src.esm.js';

export function popup({
  htmlContent,
  latitudeLongitude,
  map
}) {
  return leafletPopup()
    .setLatLng(latitudeLongitude)
    .setContent(htmlContent)
    .openOn(map);
}
