import { control as leafletControl } from '../../leaflet/leaflet-src.esm.js';

export function control({
  map,
  onAdd,
  position = 'topright',
  update,
}) {
  const created = leafletControl({ position });

  created.onAdd = onAdd
    ? onAdd
    : created.onAdd;

  created.update = update
    ? update
    : created.update;

  return map
    ? created.addTo(map)
    : created;
}
