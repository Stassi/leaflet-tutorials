import {
  circle,
  map,
  marker,
  polygon,
  popup,
  tileLayer
} from '../leaflet/leaflet-src.esm.js'

export function addCircle({
  color,
  fillColor,
  fillOpacity,
  latitudeLongitude,
  map,
  popupContent,
  radius
}) {
  return circle(latitudeLongitude, {
    color,
    fillColor,
    fillOpacity,
    radius
  }).addTo(map)
    .bindPopup(popupContent);
}

export function addMarker({
  latitudeLongitude,
  map,
  popupContent
}) {
  return marker(latitudeLongitude)
    .addTo(map)
    .bindPopup(popupContent);
}

export function addPolygon({
  latitudeLongitudes,
  map,
  popupContent
}) {
  return polygon(latitudeLongitudes)
    .addTo(map)
    .bindPopup(popupContent);
}

export function addPopup({
  htmlContent,
  latitudeLongitude,
  map
}) {
  return popup()
    .setLatLng(latitudeLongitude)
    .setContent(htmlContent)
    .openOn(map);
}

export function addTileLayer({
  attribution,
  map,
  urlTemplate,
  zoomMax: maxZoom,
}) {
  return tileLayer(urlTemplate, {
    attribution,
    maxZoom
  }).addTo(map);
}

export function createMap({
  center,
  id,
  onClick,
  zoom
}) {
  return map(id, {
    center,
    zoom
  }).on(
    'click',
    onClick
  );
}
