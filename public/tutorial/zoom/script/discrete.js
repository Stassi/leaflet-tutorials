import { getZoom, setZoom } from '../../../leaflet-adapter/map/zoom.js';
import { control } from '../../../leaflet-adapter/control/control.js';
import {
  domElement,
} from '../../../leaflet-adapter/document-object-model/dom-element.js';
import { map as leafletMap } from '../../../leaflet-adapter/map/map.js';
import { tileLayer } from '../../../leaflet-adapter/tile-layer/tile-layer.js';
import {
  attributionCarto,
  urlTemplateCarto,
} from '../../../script/base-layers.js';

const map = leafletMap({
  center: [0, 0],
  id: 'map',
  zoom: 0,
  zoomMax: 1,
  zoomMin: 0,
});

tileLayer({
  attribution: attributionCarto,
  map,
  urlTemplate: urlTemplateCarto,
});

function zoomMap(zoom) {
  setZoom({
    map,
    zoom,
  });
}

setInterval(() => {
  zoomMap(0);

  setTimeout(() => {
    zoomMap(1);
  }, 2000);
}, 4000);

control({
  map,
  onAdd() {
    const {
      element,
      setInnerHtml,
    } = domElement({
      name: 'div',
      style: {
        background: 'rgba(255,255,255,0.5)',
        color: '#000',
        textAlign: 'left',
        width: '200px',
      },
    });

    map.on('zoom zoomend zoomstart', (_ev) => {
      setInnerHtml(`Zoom level: ${getZoom(map)}`);
    });

    return element;
  },
});
