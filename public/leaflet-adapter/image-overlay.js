import {
  imageOverlay as leafletImageOverlay
} from '../leaflet/leaflet-src.esm.js';

export function imageOverlay({
  bounds,
  imageUrl,
  map,
}) {
  return leafletImageOverlay(
    imageUrl,
    bounds,
  ).addTo(map);
}
