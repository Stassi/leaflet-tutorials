import { map } from '../../leaflet/leaflet-src.esm.js';

export function worldLocator({
  id,
  onLocate,
  onLocateError,
  setViewOnLocate: setView,
  zoomMaxOnLocate: maxZoom,
}) {
  return map(id)
    .fitWorld()
    .locate({
      maxZoom,
      setView,
    }).on(
      'locationerror',
      onLocateError,
    ).on(
      'locationfound',
      onLocate,
    )
}
