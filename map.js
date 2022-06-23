// import './style.css';
// import {Map, View} from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// // import XYZ from 'ol/source/XYZ'


// // Ajout des modules pour l'integration d'icone
// import Feature from 'ol/Feature';
// import Point from 'ol/geom/Point';
// import {Icon, Style} from 'ol/style';
// import { transform } from 'ol/proj';
// import VectorSource from 'ol/source/Vector';
// import VectorLayer from 'ol/layer/Vector';


// // Import the icon file
// import location_icon from "./assets/images/location.png"

// // Creation d'une fonctionnalité icone !
// const icone_fonctionnalite = new  Feature({
//   geometry: new Point(transform([0, 0], 'EPSG:4326', 'EPSG:3857')),
//   name: "Vous",
// })
// // Ajout de l'icone
// const icon = new Icon({
//   anchor: [0.5, 46],
//   anchorXUnits: "fraction",
//   anchorYUnits: "pixels",
//   src: location_icon

// })

// const iconStyle = new ol.Style({
//   image: icon
// });

// icone_fonctionnalite.setStyle(iconStyle);

// const vectorSource = new VectorSource({
//   features: [icone_fonctionnalite],
// });

// const vectorLayer = new VectorLayer({
//   source: vectorSource,
// });

const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
    })
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 5
  })
});


