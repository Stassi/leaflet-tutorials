import { circleMarker } from '../../../leaflet-adapter/circle-marker.js';
import {
  geoJson as leafletGeoJson,
} from '../../../leaflet-adapter/geo-json.js';
import { map as leafletMap } from '../../../leaflet-adapter/map/map.js';
import { tileLayer } from '../../../leaflet-adapter/tile-layer/tile-layer.js';
import {
  attributionOsm,
  urlTemplateOsm,
} from '../../../script/base-layers.js';
import data from '../data/baseball-factions.json' with { type: 'json' };

const map = leafletMap({
  center: [39.74739, -105],
  id: 'map',
  zoom: 13,
});

tileLayer({
  attribution: attributionOsm,
  map,
  urlTemplate: urlTemplateOsm,
  zoomMax: 19,
});

leafletGeoJson({
  data,
  filter({
    properties: { underConstruction } = {},
  }) {
    return !underConstruction;
  },
  map,
  onEachFeature(
    {
      properties: {
        popupContent,
        underConstruction,
      } = {},
    },
    layer,
  ) {
    if (popupContent && !underConstruction) layer.bindPopup(popupContent);
  },
  pointToLayer(_feature, latitudeLongitude) {
    return circleMarker({
      color: '#000',
      fillColor: '#ff7800',
      fillOpacity: 0.8,
      latitudeLongitude,
      opacity: 1,
      radius: 8,
      weight: 1,
    });
  },
  style({
    geometry: { type },
    properties: { faction },
  }) {
    if (type === 'LineString') return {
      'color': '#ff7800',
      'opacity': 0.65,
      'weight': 5,
    };

    if (faction) return {
      'color': faction === 'Pluralist'
        ? '#0000ff'
        : '#ff0000'
    };
  },
});
