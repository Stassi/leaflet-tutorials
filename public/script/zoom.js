import {
  addControl,
  addTileLayer,
  createDomElement,
  getMapZoom
} from './map-utils.js';
import { attributionCarto, urlTemplateCarto } from './base-layers.js';

function addCartoTileLayer(map) {
  addTileLayer({
    attribution: attributionCarto,
    map,
    urlTemplate: urlTemplateCarto,
  });
}

function addZoomLevelControl(map) {
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
}

export function addCartoTileLayerWithZoomLevelControl(map) {
  [
    addCartoTileLayer,
    addZoomLevelControl,
  ].forEach(
    (fn) => fn(map)
  );
}
