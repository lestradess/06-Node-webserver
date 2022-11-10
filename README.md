Notas: Intrucciones para preparar la aplicación para subirla a un servidor 
1.- Instalar dotenv para tener actualizadas las variables de entorno
2.- Importar dotenv en el archivo de la app  |require('dotenv').config();|
3.- Crear el archivo .env y crear el puerto  |PORT= 8080|
4.- Configurar el puerto en el proyecto
    |const port = process.env.PORT
    app.listen(port, () => { console.log(`Escuchando puerto ${ port }`);   });|
5.- En el archivo package.json añadir la entrada en scripts |start": "node app.js"|