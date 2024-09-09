export function getZoom(map) {
  return map.getZoom()
}

export function setZoom({
  map,
  zoom,
  zoomPanOptions,
}) {
  return map.setZoom(
    zoom,
    zoomPanOptions,
  );
}
