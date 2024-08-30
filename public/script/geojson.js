import {
  addGeoJson,
  addTileLayer,
  createCircleMarker,
  createMap,
} from './map-utils.js';
import { attribution, urlTemplate } from './open-street-map.js';
import data from '../data/baseball-factions.json' with { type: 'json' };

const map = createMap({
  center: [39.74739, -105],
  id: 'map',
  zoom: 13
});

addTileLayer({
  attribution,
  map,
  urlTemplate,
  zoomMax: 19,
});

addGeoJson({
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
    return createCircleMarker({
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
