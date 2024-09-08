import { control as leafletControl } from '../../leaflet/leaflet-src.esm.js';

export function layers({
  baseLayers,
  collapsed = true,
  map,
  overlays,
}) {
  const created = leafletControl.layers(
    baseLayers,
    overlays,
    { collapsed },
  );

  return map
    ? created.addTo(map)
    : created;
}
