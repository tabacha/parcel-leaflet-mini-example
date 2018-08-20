import './node_modules/leaflet/dist/leaflet.css';
import 'leaflet';
import './index.css';
console.log('Hello World');
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',{
}).addTo(mymap);
