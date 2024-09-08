import {
  addLayersControl,
  createLayerGroup,
  createMap,
  createMarker,
  createTileLayer,
} from '../../../leaflet-adapter/map-utils.js';
import {
  attributionHot,
  attributionOsm,
  attributionOTopo,
  urlTemplateHot,
  urlTemplateOsm,
  urlTemplateOTopo,
} from '../../../script/base-layers.js';

const baseLayers = Object.fromEntries(
  [
    {
      attribution: attributionOsm,
      name: 'OpenStreetMap',
      urlTemplate: urlTemplateOsm,
    },
    {
      attribution: attributionHot,
      name: '<span style="color: red">OpenStreetMap.HOT</span>',
      urlTemplate: urlTemplateHot,
    },
    {
      attribution: attributionOTopo,
      name: 'OpenTopoMap',
      urlTemplate: urlTemplateOTopo,
    },
  ].map(({
    attribution,
    name,
    urlTemplate,
  }) => [
    name,
    createTileLayer({
      attribution,
      maxZoom: 19,
      urlTemplate,
    }),
  ])
);

const overlays = Object.fromEntries(
  [
    {
      data: [
        {
          latitudeLongitude: [39.73, -104.8],
          name: 'Aurora',
        },
        {
          latitudeLongitude: [39.74, -104.99],
          name: 'Denver',
        },
        {
          latitudeLongitude: [39.77, -105.23],
          name: 'Golden',
        },
        {
          latitudeLongitude: [39.61, -105.02],
          name: 'Littleton',
        },
      ],
      name: 'Cities',
      popupContentTemplate: (placeName) => `This is ${placeName}, CO.`,
    },
    {
      data: [
        {
          latitudeLongitude: [39.75, -105.09],
          name: 'Crown',
        },
        {
          latitudeLongitude: [39.68, -105.00],
          name: 'Ruby',
        },
      ],
      name: 'Parks',
      popupContentTemplate: (placeName) => `This is ${placeName} Hill Park.`,
    },
  ].map(({
    data,
    name: overlayName,
    popupContentTemplate,
  }) => [
    overlayName,
    createLayerGroup(
      data.map(({
        latitudeLongitude,
        name: placeName,
      }) => createMarker({
        latitudeLongitude,
        popupContent: popupContentTemplate(placeName),
      }))
    ),
  ])
);

addLayersControl({
  baseLayers,
  map: createMap({
    activeLayers: [
      baseLayers.OpenStreetMap,
      overlays.Cities,
    ],
    center: [39.73, -104.99],
    id: 'map',
    zoom: 10,
  }),
  overlays,
});
