// se requier crear uan web server 

// llamamos el protocolo de prtocololo de transfrencia de hipertexto
// Obtenemos el modulo http
const protocolhttp = require('http');


/* Durante mucho tiempo, el sistema de módulo CommonJS ha sido el sistema de módulo por defecto dentro 
del ecosistema Node.js. Pero un nuevo sistema de módulo fue introducido en Node.js v8.5.0, el cual 
es el sistema de módulo ES.

Los módulos CommonJS y EMCAScript (módulos ES) ahora trabajan a la perfección en Node.js. La mayor 
diferencia entre ellos es su ejecución. */
/* Creamaos una funcion flecha para poder hacer las peticiones 
Enmascrip no facilita la vida con meno codigo */

protocolhttp.createServer( (req, res) =>{
  // req es el require o peticion que te hace el cliente
  // req.url es una propiedad de la petición que nos muestra el url

    res.write('Hola Hola soy Juan ')
    res.end()

// res es el response o respuesta que hace el servidor
// res.end() termina el proceso de respuestas por lo que el navegador deja de cargar
})
// Le indicamos a nuestro servidor que escuche el puerto 8080
.listen(8080)
// Mostramos un mensaje que indica que comenzamos a escuchar con nuestro servidor
console.log('Escuchando en el puerto ',8080);