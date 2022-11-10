const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const ruta = 'public/template/';


//Notas  Handlebars Esto es requido para utilizar hbs con Express
app.set('view engine', 'hbs');
//Notas Registrando parciales (trozos de paginas, header,footer)
hbs.registerPartials(__dirname + '/views/partials');

//Notas middleware de express || Servir contenido estatico
app.use(express.static('public'));

//Notas Para mandar contenido de otra carpeta
app.get('/', (req, res) => {
    //Notas Mandando argumentos
    res.render('home',{
        nombre: "Jose Luis",
        titulo:'Curso de node'
    });
});
app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: "Jose Luis",
        titulo: 'Curso de node'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: "Jose Luis",
        titulo: 'Curso de node'
    });
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});
//Notas Describe por consola la informacion
app.listen(port, () => {
    console.log(`Escuchando puerto ${ port }`);
});