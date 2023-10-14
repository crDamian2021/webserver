// se requier crear un web server 
// llamamos el protocolo de prtocololo de transfrencia de hipertexto

//require - Todo lo que el usuario solicita
//Response todo lo que el usuario responde
const protocolhttp = require('http');

/* Creamaos una funcion flecha para poder hacer las peticiones */

protocolhttp.createServer( (req, res) =>{
  // req es el require o peticion que te hace el cliente
  // req.url es una propiedad de la petición que nos muestra el url
    res.writeHead(200,{'Content-Type':'application/json'});

    const crearPersona = {
        id:1,
        nombre: 'Adev Damian',
        nacionalida:'Santiago Atitlan'
    }

    res.write(JSON.stringify(crearPersona));
    res.end();


})
.listen(8080)

console.log('Escuchando en el puerto ',8080);