export function setView({
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
