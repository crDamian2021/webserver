

const llamarexpress = require('express')
const app = llamarexpress()
const port = 8080


//utilizacion de hbs para el renderizado de la pagina web 

app.set('view engine','hbs')


app.use(llamarexpress.static('./public3'))
/* app.use(llamarexpress.static('./public3/viwes')) */
//app.use(llamarexpress.static('public'))
/* Express da soporte a los siguientes métodos de direccionamiento que se corresponden con los métodos HTTP: get, post, put, head,
delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, 
 m-search, notify, subscribe, unsubscribe, patch, search y connect. */


 app.get('/',  (req, res)=>{
    res.render('home',{
        nombre:'Adolfo Damian',
        title:'CURSO BASICO DE NODE.JS'
    })
   
})

 app.get('/generic',  (req, res)=>{
    res.sendFile(__dirname + '/public3/template/generic.html')
   
})

/*  Hay que recordar que los parámetros GET son aquellos que se envían 
mediante la url en un formato de pares clave/valor y después de la URL.  */
app.get('/elements',  (req, res)=>{
    res.sendFile(__dirname + '/public3/template/elements.html')
})

app.get('*',  (req, res)=>{
    res.sendFile(__dirname + '/public/404.html')
})
// Le indicamos a nuestro servidor que escuche el puerto 8080
app.listen(port,()=>{
    console.log(`Escuchando en el puerto http:/localhost:${port}`);

}); 
