import {
  addControl,
  addTileLayer,
  createDomElement,
  createMap,
  getMapZoom,
  setMapZoom,
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
  zoomSnap: 0.25,
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

function zoomCycle() {
  [
    0,
    0.25,
    0.50,
    0.75,
    1.00,
    0.75,
    0.50,
    0.25,
  ].forEach((zoom, index) => {
    setTimeout(
      () => {
        setMapZoom({
          map,
          zoom,
        });
      },
      index * 1000,
    );
  });
}

zoomCycle();
setInterval(zoomCycle, 8000);
