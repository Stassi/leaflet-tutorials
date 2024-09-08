import { geoJSON as leafletGeoJson } from '../leaflet/leaflet-src.esm.js';

export function geoJson({
  data,
  filter,
  map,
  onEachFeature,
  pointToLayer,
  style,
}) {
  const created = leafletGeoJson(
    data,
    {
      filter,
      onEachFeature,
      pointToLayer,
      style,
    },
  );

  return map
    ? created.addTo(map)
    : created;
}
