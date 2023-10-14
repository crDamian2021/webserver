
// se requier crear uan web server 

// llamamos el protocolo de prtocololo de transfrencia de hipertexto
// Obtenemos el modulo express

/* Express es una infraestructura de aplicaciones web Node.js mínima y 
flexible que proporciona un conjunto 
sólido de características para las aplicaciones web y móviles */
const llamarexpress = require('express')

const app = llamarexpress()


/* Hay que recordar que los parámetros GET son aquellos que se envían 
mediante la url en un formato de pares clave/valor y después de la URL */
app.get('/', function (req, res){
    res.send('Home page')
})

app.get('/hola-mundo', function (req, res){
    res.send('Hola mundo es su respectiva ruta ')
})

app.get('/*', function (req, res){
    res.send('404 | 404 Not Found')
})
// Le indicamos a nuestro servidor que escuche el puerto 8080
app.listen(8080);
// Mostramos un mensaje que indica que comenzamos a escuchar con nuestro servidor
console.log('Escuchando en el puerto ',8080);