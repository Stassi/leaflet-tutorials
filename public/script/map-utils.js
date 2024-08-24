import {
  circle,
  icon,
  map,
  marker,
  polygon,
  popup,
  tileLayer
} from '../leaflet/leaflet-src.esm.js'

export function addCircle({
  color = '#3388ff',
  fillColor = '#3388ff',
  fillOpacity = 0.2,
  latitudeLongitude,
  map,
  popupContent,
  radius
}) {
  const shape = circle(latitudeLongitude, {
    color,
    fillColor,
    fillOpacity,
    radius
  }).addTo(map);

  return popupContent
    ? shape.bindPopup(popupContent)
    : shape;
}

export function addMarker({
  iconOptions,
  latitudeLongitude,
  map,
  popupContent
}) {
  const createdMarker = marker(
    latitudeLongitude,
    iconOptions
      ? { icon: icon(iconOptions) }
      : undefined
  ).addTo(map);

  return popupContent
    ? createdMarker.bindPopup(popupContent)
    : createdMarker;
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
  zoomMax: maxZoom = 18,
}) {
  return tileLayer(urlTemplate, {
    attribution,
    maxZoom
  }).addTo(map);
}

export function createMap({
  center,
  id,
  onClick = () => {
  },
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

export function createWorldLocatorMap({
  id,
  onLocate,
  onLocateError,
  setViewOnLocate: setView,
  zoomMaxOnLocate: maxZoom
}) {
  return map(id)
    .fitWorld()
    .locate({
      maxZoom,
      setView
    }).on(
      'locationerror',
      onLocateError
    ).on(
      'locationfound',
      onLocate
    )
}
