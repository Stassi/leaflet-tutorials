import { control as leafletControl } from '../../leaflet/leaflet-src.esm.js';

export function scale({
  map,
  maxWidth = 100,
}) {
  const created = leafletControl
    .scale({ maxWidth });

  return map
    ? created.addTo(map)
    : created;
}
