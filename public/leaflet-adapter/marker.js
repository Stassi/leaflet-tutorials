import {
  icon,
  marker as leafletMarker,
} from '../leaflet/leaflet-src.esm.js';

export function marker({
  altText: alt = 'Marker',
  iconOptions,
  latitudeLongitude,
  map,
  popupContent,
}) {
  const created = leafletMarker(
    latitudeLongitude,
    {
      alt,
      ...iconOptions
        ? { icon: icon(iconOptions) }
        : {}
    },
  ), prerendered = popupContent
    ? created.bindPopup(popupContent)
    : created;

  return map
    ? prerendered.addTo(map)
    : prerendered;
}
