import {
  DomUtil,
  addControl,
  addGeoJson,
  addTileLayer,
  createMap,
} from './map-utils.js';
import { attributionOsm, urlTemplateOsm } from './base-layers.js';
import data
  from '../data/us-state-population-density.json' with { type: 'json' };

const map = createMap({
  center: [37.8, -96],
  id: 'map',
  zoom: 4
}), grades = [
  0,
  10,
  20,
  50,
  100,
  200,
  500,
  1000,
];

addTileLayer({
  attribution: attributionOsm,
  map,
  urlTemplate: urlTemplateOsm,
  zoomMax: 19,
});

function getColor(density) {
  return density > grades[7] ? '#800026' :
    density > grades[6] ? '#BD0026' :
      density > grades[5] ? '#E31A1C' :
        density > grades[4] ? '#FC4E2A' :
          density > grades[3] ? '#FD8D3C' :
            density > grades[2] ? '#FEB24C' :
              density > grades[1] ? '#FED976' :
                '#FFEDA0';
}

addControl({
  map,
  onAdd(_map) {
    const div = DomUtil.create(
      'div',
      'info legend',
    );

    div.innerHTML = grades.map(
      (grade, i) => {
        const nextGrade = grades[i + 1],
          color = getColor(grade + 1),
          range = nextGrade
            ? `${grade}&ndash;${nextGrade}<br>`
            : `${grade}+`;
        return `<i style="background:${color}"></i> ${range}`;
      }).join('');

    return div;
  },
  position: 'bottomright',
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
}), geoJson = addGeoJson({
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
      fillColor: getColor(density),
      fillOpacity: 0.7,
      opacity: 1,
      weight: 2,
    };
  },
});
