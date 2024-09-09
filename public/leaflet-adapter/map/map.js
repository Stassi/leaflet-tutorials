import { map as leafletMap } from '../../leaflet/leaflet-src.esm.js';
import { epsg3857 } from '../coordinate-reference-system/epsg-3857.js';

export function map({
  activeLayers: layers,
  center,
  crs = epsg3857,
  dragging = true,
  id,
  onClick = () => {
  },
  zoom,
  zoomDelta = 1,
  zoomMax: maxZoom,
  zoomMin: minZoom,
  zoomSnap = 1,
}) {
  return leafletMap(id, {
    center,
    crs,
    dragging,
    layers,
    maxZoom,
    minZoom,
    zoom,
    zoomDelta,
    zoomSnap,
  }).on(
    'click',
    onClick,
  );
}
