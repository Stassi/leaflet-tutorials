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
  id: 'map',
  zoom: 0,
  zoomDelta: 0.25,
  zoomMax: 18,
  zoomMin: 0,
  zoomSnap: 0,
});

addTileLayer({
  attribution: attributionCarto,
  map,
  urlTemplate: urlTemplateCarto,
});

addControl({
  map,
  onAdd() {
    const [
      {
        appendChild: appendContainerChild,
        element: container,
      },
      {
        element: gauge,
        setInnerHtml: setGaugeInnerHtml,
      },
    ] = [
      {},
      {
        background: 'rgba(255,255,255,0.5)',
        color: '#000',
        textAlign: 'left',
        width: '200px',
      },
    ].map((style) => createDomElement({
      name: 'div',
      style,
    }));

    map.on('zoom zoomend zoomstart', (_ev) => {
      setGaugeInnerHtml(`Zoom level: ${getMapZoom(map)}`);
    });

    appendContainerChild(gauge);
    return container;
  },
});
