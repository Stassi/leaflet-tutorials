import { tileLayer } from '../../leaflet/leaflet-src.esm.js';

const { wms: wmsTileLayer } = tileLayer;

export function tileLayerWms({
  baseUrl,
  layers,
  map,
}) {
  const created = wmsTileLayer(
    baseUrl,
    { layers },
  );

  return map
    ? created.addTo(map)
    : created;
}
