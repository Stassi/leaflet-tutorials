import {
  createMap,
} from '../../../leaflet-adapter-deprecated/leaflet-adapter-deprecated.js';
import { layers } from '../../../leaflet-adapter/control/layers.js';
import { tileLayerWms } from '../../../leaflet-adapter/tile-layer-wms.js';

const map = createMap({
  center: [-17, -67],
  id: 'map',
  zoom: 3,
});

layers({
  baseLayers: Object.fromEntries(
    [
      {
        layers: 'TOPO-WMS',
        name: 'Topography',
        visible: true,
      },
      {
        layers: 'OSM-Overlay-WMS',
        name: 'Places',
        visible: false,
      },
      {
        layers: 'TOPO-WMS,OSM-Overlay-WMS',
        name: 'Topography, then places',
        visible: false,
      },
      {
        layers: 'OSM-Overlay-WMS,TOPO-WMS',
        name: 'Places, then topography',
        visible: false,
      },
    ].map(({
      layers,
      name,
      visible,
    }) => [
      name,
      tileLayerWms({
        baseUrl: 'https://ows.mundialis.de/services/service?',
        layers,
        map: visible
          ? map
          : undefined,
      }),
    ])
  ),
  collapsed: false,
  map,
});
