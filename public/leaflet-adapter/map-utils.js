import {
  CRS,
  DomUtil,
  icon,
  latLng as latitudeLongitude,
  map,
  marker,
  popup,
  tileLayer,
} from '../leaflet/leaflet-src.esm.js';

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
