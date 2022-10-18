const express = require('express');
const app = express();
const engine = require('ejs-mate');
const path = require('path');
// const { dirname } = require('path');
const { json } = require('express/lib/response');
// const { Socket } = require('net');
// const { send } = require('process');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
// inicializacion


//settings

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));   
// routes
app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use(require('./routes'));
app.use(express.static(path.join(__dirname,'public'))); 
//Staring the server
// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//       io.emit('chat message', msg);
//     });
//   });

// io.on('conectado',(socket) =>{
//     socket.io('mensaje',(msg)=>{
//         console.log('message: ' +msg );
//     });
// });


http.listen(5000,() => {
    console.log('Server On Run Port 5000');
});


///////////////////////////////
// const iconoMenu = document.querySelector('#icono-menu'),
// menu = document.querySelector('#menu');

// iconoMenu.addEventListener('click', (e) => {

// // Alternamos estilos para el menú y body
// menu.classList.toggle('active');
// document.body.classList.toggle('opacity');

// // Alternamos su atributo 'src' para el ícono del menú
// const rutaActual = e.target.getAttribute('src');

// if(rutaActual == 'img/open-menu.png'){
//   e.target.setAttribute('src','img/open-menu2.png');
// }else{
//   e.target.setAttribute('src','img/open-menu.png');
// }
// });