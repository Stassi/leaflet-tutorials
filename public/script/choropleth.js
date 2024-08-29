import {
  DomUtil,
  addControl,
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

const info = addControl({
  map,
  onAdd(_map) {
    this._div = DomUtil.create(
      'div',
      'info',
    );

    this.update();

    return this._div;
  },
  update({
    density,
    name,
  } = {}) {
    this._div.innerHTML = `<h4>US population density</h4>${
      density && name
        ? `<b>${name}</b><br />${density} people / mi<sup>2</sup>`
        : 'Hover over a state'
    }`;
  },
});

const geoJson = addGeoJson({
  data,
  map,
  onEachFeature(_feature, layer) {
    layer.on({
      click({ target }) {
        map.fitBounds(
          target.getBounds()
        );
      },
      mouseout({ target }) {
        info.update()

        geoJson.resetStyle(target);
      },
      mouseover({
        target: layer,
        target: {
          feature: { properties },
        },
      }) {
        info.update(properties);

        layer.setStyle({
          color: '#666',
          dashArray: '',
          fillOpacity: 0.7,
          weight: 5,
        });

        layer.bringToFront();
      },
    });
  },
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
