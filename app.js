const express = require('express');
const app = express();
const port = 8080;

//Notas Entra en la pagina principal
app.get('/', (req, res) => {
    res.send('Página principal');
});
//Notas Entra en http://localhost:8080/hola-mundo
app.get('/hola-mundo', (req, res) => {
    res.send('Página Hola mundo');
});
//Notas Entra si no es ninguna de las otras alternativas
app.get('*', (req, res) => {
    res.send('404| page no found');
});
//Notas Describe por consola la informacion
app.listen(port, () => {
    console.log(`Escuchando puerto ${ port }`);
});