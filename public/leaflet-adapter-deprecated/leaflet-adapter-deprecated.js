import { map as leafletMap } from '../leaflet/leaflet-src.esm.js';

export function createWorldLocatorMap({
  id,
  onLocate,
  onLocateError,
  setViewOnLocate: setView,
  zoomMaxOnLocate: maxZoom,
}) {
  return leafletMap(id)
    .fitWorld()
    .locate({
      maxZoom,
      setView,
    }).on(
      'locationerror',
      onLocateError,
    ).on(
      'locationfound',
      onLocate,
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
