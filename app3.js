// se requier crear uan web server 
// se requier crear uan web server 

// llamamos el protocolo de prtocololo de transfrencia de hipertexto

//require - Todo lo que el usuario solicita
//Response todo lo que el usuario responde
const protocolhttp = require('http');

/* Creamaos una funcion flecha para poder hacer las peticiones */

//Funcion para enviar un archivo csv , estos es una ruta.
protocolhttp.createServer( (req, res) =>{

/*     res.writeHead(200,{'Content-Type':'application/pdf'});

    const crearPersona = {
        id:1,
        nombre: 'Adev Damian',
        nacionalida:'Santiago Atitlan'
    }

    res.write(JSON.stringify(crearPersona));
    res.end(); */


    // res es el response o respuesta que hace el servidor
// res.end() termina el proceso de respuestas por lo que el navegador deja de cargar

    res.setHeader("Content-Disposition", "attachment;filename=app.csv")
    res.writeHead(200, {'Content-Type': 'application/csv'})

    res.write('id,nombre\n')
    res.write('1,Antonio\n')
    res.write('2,Steven\n')
    res.write('3,Bill\n')
    res.write('4,Dennis\n')
    res.end();
    


})
.listen(8080)

console.log('Escuchando en el puerto ',8080);