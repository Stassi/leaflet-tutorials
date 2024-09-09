import {
  CRS,
  latLng as latitudeLongitude,
  map,
} from '../leaflet/leaflet-src.esm.js';

const {
  Simple: CrsSimple,
  EPSG3857: CrsEpsg3857,
  EPSG4326: CrsEpsg4326,
} = CRS;
export {
  CrsEpsg4326,
  CrsSimple,
};

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
