import {
  addGeoJson,
  addTileLayer,
  createMap,
} from './map-utils.js';
import { attribution, urlTemplate } from './open-street-map.js';
import data
  from '../data/us-state-population-density.json' with { type: 'json' };

const map = createMap({
  center: [37.8, -96],
  id: 'map',
  zoom: 4
});

addTileLayer({
  attribution,
  map,
  urlTemplate,
  zoomMax: 19,
});

addGeoJson({
  data,
  map,
  style({
    properties: { density },
  }) {
    return {
      color: 'white',
      dashArray: '3',
      fillColor: density > 1000 ? '#800026' :
        density > 500 ? '#BD0026' :
          density > 200 ? '#E31A1C' :
            density > 100 ? '#FC4E2A' :
              density > 50 ? '#FD8D3C' :
                density > 20 ? '#FEB24C' :
                  density > 10 ? '#FED976' :
                    '#FFEDA0',
      fillOpacity: 0.7,
      opacity: 1,
      weight: 2,
    };
  },
});
