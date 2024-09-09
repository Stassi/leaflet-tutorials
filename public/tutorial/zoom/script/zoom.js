import { control } from '../../../leaflet-adapter/control/control.js';
import {
  domElement,
} from '../../../leaflet-adapter/document-object-model/dom-element.js';
import { getZoom } from '../../../leaflet-adapter/map/zoom.js';
import { tileLayer } from '../../../leaflet-adapter/tile-layer/tile-layer.js';
import {
  attributionCarto,
  urlTemplateCarto,
} from '../../../script/base-layers.js';

function addCartoTileLayer(map) {
  tileLayer({
    attribution: attributionCarto,
    map,
    urlTemplate: urlTemplateCarto,
  });
}

function addZoomLevelControl(map) {
  control({
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
      ].map((style) => domElement({
        name: 'div',
        style,
      }));

      map.on('zoom zoomend zoomstart', (_ev) => {
        setGaugeInnerHtml(`Zoom level: ${getZoom(map)}`);
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
