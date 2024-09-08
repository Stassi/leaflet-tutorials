import {
  polygon as leafletPolygon,
} from '../leaflet/leaflet-src.esm.js';

export function polygon({
  latitudeLongitudes,
  map,
  popupContent
}) {
  const created = leafletPolygon(latitudeLongitudes)
    .bindPopup(popupContent);

  return map
    ? created.addTo(map)
    : created;
}
