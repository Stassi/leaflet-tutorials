import {
  circle,
  circleMarker,
  control,
  geoJSON,
  icon,
  map,
  marker,
  polygon,
  popup,
  tileLayer
} from '../leaflet/leaflet-src.esm.js'

export { DomUtil } from '../leaflet/leaflet-src.esm.js';

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

export function addControl({
  map,
  onAdd,
  position = 'topright',
  update,
}) {
  const createdControl = control({ position });

  createdControl.onAdd = onAdd
    ? onAdd
    : createdControl.onAdd;

  createdControl.update = update
    ? update
    : createdControl.update;

  return createdControl.addTo(map);
}

export function addGeoJson({
  data,
  filter,
  map,
  onEachFeature,
  pointToLayer,
  style,
}) {
  return geoJSON(
    data,
    {
      filter,
      onEachFeature,
      pointToLayer,
      style,
    },
  ).addTo(map);
}

export function addMarker({
  altText: alt = 'Marker',
  iconOptions,
  latitudeLongitude,
  map,
  popupContent
}) {
  const createdMarker = marker(
    latitudeLongitude,
    {
      alt,
      ...iconOptions
        ? { icon: icon(iconOptions) }
        : {}
    },
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

export function createCircleMarker({
  color,
  fillColor,
  fillOpacity,
  latitudeLongitude,
  opacity,
  radius,
  weight,
}) {
  return circleMarker(
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
