import { polyline as leafletPolyline } from '../leaflet/leaflet-src.esm.js';

export function polyline({
  latitudeLongitudes,
  map,
}) {
  const created = leafletPolyline(latitudeLongitudes);

  return map
    ? created.addTo(map)
    : created;
}
