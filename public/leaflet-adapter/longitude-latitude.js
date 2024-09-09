import { latLng as latitudeLongitude } from '../leaflet/leaflet-src.esm.js';

export function longitudeLatitude(x, y) {
  const firstParameterIsArray = Array.isArray(x);
  return latitudeLongitude(
    firstParameterIsArray ? x[1] : y,
    firstParameterIsArray ? x[0] : x,
  );
}
