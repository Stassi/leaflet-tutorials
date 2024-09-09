import { tileLayer as leafletTileLayer } from '../../leaflet/leaflet-src.esm.js';

export function tileLayer({
  attribution,
  map,
  urlTemplate,
  zoomMax: maxZoom = 18,
}) {
  const created = leafletTileLayer(
    urlTemplate,
    {
      attribution,
      maxZoom,
    },
  );

  return map
    ? created.addTo(map)
    : created;
}
