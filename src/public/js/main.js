const map = L.map('map-template').setView([14.601193176769522, -90.65501422035939], 15);
const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';//'https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
L.tileLayer(tileUrl).addTo(map);

function onLocationFound(e){
    var radius = e.accuracy /2;
    L.marker(e.latlng).addTo(map)
    .bindPopup('Aqui Toy '+ radius + 'hola').openPopup();
    L.circle(e.latlng,radius).addTo(map);
}
function onLocationError(e) {
    alert(e.message);
}
map.on('locationfound',onLocationFound);
map.on('locationerror',onLocationError);
// map.locate({enableHighAccuracy: true});
// map.on('locationFound', e =>{
//     console.log('e');
//     console.log('Coordenadas nuevas');
// });

let iconmarker = L.icon({
    iconUrl:'../css/605bus_100552.png',
    iconSize:[40,40],
    iconAnchor:[20,50]
})
const bus= L.marker([14.60845452155433, -90.6613391834722], {icon:iconmarker});
bus.bindPopup('Transporte Orellana!!!');
map.addLayer(bus);

// const bus1= L.marker([14.609323, -90.653262]).addTo(map);
// bus1.bindPopup('Transporte Dorita!!!');
// map.addLayer(bus1);

const marker= L.marker([14.608286, -90.666651]).addTo(map);
marker.bindPopup('Estoy Aquí Henry!!!');
map.addLayer(marker);

const coordeoperador= L.marker([14.600833087033658, -90.6547411110539]).addTo(map);
coordeoperador.bindPopup('Aqui estoy Usuario!!!');
map.addLayer(coordeoperador);

 navigator.geolocation.getCurrentPosition(
     (pos) => {
         const { coords } = pos
         console.log(coords)
        const bus1 = L.marker([coords.latitude, coords.longitude],{icon:iconmarker}).addTo(map);
        bus1.bindPopup('Transporte Dorita!!!');
        map.addLayer(bus1);
     },
     (err) => {
         console.log(err)
     },
     {
         enableHighAccuracy : true,
         timeout:3000,
         maximumAge:0
     }
 )