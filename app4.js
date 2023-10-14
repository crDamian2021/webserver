


/* Express es una infraestructura de aplicaciones web Node.js mínima y 
flexible que proporciona un conjunto 
sólido de características para las aplicaciones web y móviles */
const llamarexpress = require('express')

const app = llamarexpress()


app.get('/', function (req, res){
    res.send('Hola Mundo desde expres')
})
 // Le indicamos a nuestro servidor que escuche el puerto 8080   
app.listen(8080);
// Mostramos un mensaje que indica que comenzamos a escuchar con nuestro servidor
console.log('Escuchando en el puerto ',8080);