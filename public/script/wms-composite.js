import {
  addLayersControl,
  createMap,
  wmsTileLayer,
} from './map-utils.js';

const map = createMap({
  center: [-17, -67],
  id: 'map',
  zoom: 3,
});

addLayersControl({
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
      wmsTileLayer({
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
