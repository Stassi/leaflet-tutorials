import {
  CRS,
  DomUtil,
  circle,
  circleMarker,
  control,
  geoJSON,
  icon,
  imageOverlay,
  latLng as latitudeLongitude,
  map,
  marker,
  polygon,
  polyline,
  popup,
  tileLayer,
} from '../leaflet/leaflet-src.esm.js'

export {
  CRS,
  DomUtil,
  layerGroup as createLayerGroup,
} from '../leaflet/leaflet-src.esm.js';

const { wms: leafletWmsTileLayer } = tileLayer;

const {
  Simple: CrsSimple,
  EPSG3857: CrsEpsg3857,
  EPSG4326: CrsEpsg4326,
} = CRS;
export {
  CrsEpsg4326,
  CrsSimple,
};

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

export function addImageOverlay({
  bounds,
  imageUrl,
  map,
}) {
  return imageOverlay(
    imageUrl,
    bounds,
  ).addTo(map);
}

export function addLayersControl({
  baseLayers,
  collapsed = true,
  map,
  overlays,
}) {
  return control.layers(
    baseLayers,
    overlays,
    { collapsed },
  ).addTo(map);
}

export function addPolyline({
  latitudeLongitudes,
  map,
}) {
  return polyline(latitudeLongitudes).addTo(map);
}

export function createMarker({
  altText: alt = 'Marker',
  iconOptions,
  latitudeLongitude,
  popupContent,
}) {
  const createdMarker = marker(
    latitudeLongitude,
    {
      alt,
      ...iconOptions
        ? { icon: icon(iconOptions) }
        : {}
    },
  );

  return popupContent
    ? createdMarker.bindPopup(popupContent)
    : createdMarker;
}

export function addMarker({ map, ...props }) {
  return createMarker({ ...props })
    .addTo(map);
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

export function addScaleControl({
  map,
  maxWidth = 100,
}) {
  control
    .scale({ maxWidth })
    .addTo(map);
}

export function createTileLayer({
  attribution,
  urlTemplate,
  zoomMax: maxZoom = 18,
}) {
  return tileLayer(
    urlTemplate,
    {
      attribution,
      maxZoom,
    },
  );
}

export function addTileLayer({ map, ...props }) {
  return createTileLayer({ ...props })
    .addTo(map);
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

export function createDomElement({ name, style }) {
  const element = DomUtil.create(name);

  Object.assign(
    element.style,
    style,
  );

  return {
    appendChild(node) {
      element.appendChild(node);
      return node;
    },
    element,
    setInnerHtml(innerHtml) {
      element.innerHTML = innerHtml;
      return innerHtml;
    },
  };
}

export function createMap({
  activeLayers: layers,
  center,
  crs = CrsEpsg3857,
  dragging = true,
  id,
  onClick = () => {
  },
  zoom,
  zoomDelta = 1,
  zoomMax: maxZoom,
  zoomMin: minZoom,
  zoomSnap = 1,
}) {
  return map(id, {
    center,
    crs,
    dragging,
    layers,
    maxZoom,
    minZoom,
    zoom,
    zoomDelta,
    zoomSnap,
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

export function fitMapBounds({
  bounds,
  map,
}) {
  return map.fitBounds(bounds);
}

export function getMapZoom(map) {
  return map.getZoom()
}

export function longitudeLatitude(x, y) {
  const firstParameterIsArray = Array.isArray(x);
  return latitudeLongitude(
    firstParameterIsArray ? x[1] : y,
    firstParameterIsArray ? x[0] : x,
  );
}

export function setMapView({
  center,
  map,
  zoom,
  zoomPanOptions,
}) {
  return map.setView(
    center,
    zoom,
    zoomPanOptions,
  );
}

export function setMapZoom({
  map,
  zoom,
  zoomPanOptions,
}) {
  return map.setZoom(
    zoom,
    zoomPanOptions,
  );
}

export function wmsTileLayer({
  baseUrl,
  layers,
  map,
}) {
  const created = leafletWmsTileLayer(
    baseUrl,
    { layers },
  );

  return map
    ? created.addTo(map)
    : created;
}
