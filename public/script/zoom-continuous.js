import {
  addControl,
  addTileLayer,
  createDomElement,
  createMap,
  getMapZoom,
} from './map-utils.js';
import {
  attributionCarto,
  urlTemplateCarto,
} from './base-layers.js';

const map = createMap({
  center: [0, 0],
  dragging: false,
  id: 'map',
  zoom: 0,
  zoomMax: 1,
  zoomMin: 0,
});

addTileLayer({
  attribution: attributionCarto,
  map,
  urlTemplate: urlTemplateCarto,
});

addControl({
  map,
  onAdd() {
    const {
      appendChild: appendContainerChild,
      element: container,
    } = createDomElement({
      name: 'div',
      style: {
        background: 'rgba(255,255,255,0.5)',
        color: '#000',
        textAlign: 'left',
        width: '200px',
      },
    });

    const {
      element: gauge,
      setInnerHtml: setGaugeInnerHtml,
    } = createDomElement({ name: 'div' });

    map.on('zoom zoomend zoomstart', (_ev) => {
      setGaugeInnerHtml(`Zoom level: ${getMapZoom(map)}`);
    });

    appendContainerChild(gauge);
    return container;
  },
});
