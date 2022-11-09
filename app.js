const express = require('express');
const app = express();
const port = 8080;
const ruta = 'public/template-roadtrip/';

//Notas Esto es requido para utilizar hbs con Express
app.set('view engine', 'hbs');

//Notas middleware de express || Servir contenido estatico
app.use(express.static('public'));

//Notas Para mandar contenido de otra carpeta
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/generic', (req, res) => {
    res.sendFile(__dirname +'/'+ ruta +'/generic.html');
});
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/' + ruta + '/elements.html');
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});
//Notas Describe por consola la informacion
app.listen(port, () => {
    console.log(`Escuchando puerto ${ port }`);
});