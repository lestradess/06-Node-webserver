const http = require('http');

//Notas (req)request es lo que se manda a la página, lo que solicita desde ella,
//Notas (res)response es lo que se responde desde el servidor
http.createServer((req, res) => {
    res.write('Hola mundo');

    res.writeHead(200);
    res.end("");
})
//Notas Con listen le decimos a node el puerto
.listen (8080);

console.log('Escuchando el puerto 8080')