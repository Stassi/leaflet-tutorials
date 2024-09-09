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
