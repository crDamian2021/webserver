

const llamarexpress = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = llamarexpress()
const port = process.env.PORT   



//utilizacion de hbs para el renderizado de la pagina web 

app.set('view engine','hbs')



/* app.use(llamarexpress.static('./public3/viwes')) */
//app.use(llamarexpress.static('public'))
/* Express da soporte a los siguientes métodos de direccionamiento que se corresponden con los métodos HTTP: get, post, put, head,
delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, 
 m-search, notify, subscribe, unsubscribe, patch, search y connect. */

hbs.registerPartials(__dirname +'/views/partials')
hbs.registerPartial('footer', '{{footer}}');
hbs.registerPartial('header', '{{header}}');
hbs.registerPartial('navbar', '{{navbar}}');


app.use(llamarexpress.static('./public3'))

 app.get('/',  (req, res)=>{
    res.render('home3',{
        nombre:'Adolfo Damian',
        title:'CURSO BASICO DE NODE.JS'
    })
   
})


app.get('/generic',  (req, res)=>{
    res.render('generic',{
        nombre:'Adolfo Damian',
        title:'CURSO BASICO DE NODE.JS'
    })
   
})

app.get('/elements',  (req, res)=>{
    res.render('elements',{
        nombre:'Adolfo Damian',
        title:'CURSO BASICO DE NODE.JS'
    })
   
})



 app.get('/generic',  (req, res)=>{
    res.sendFile(__dirname + '/public3/views/generic')
   
})

/*  Hay que recordar que los parámetros GET son aquellos que se envían 
mediante la url en un formato de pares clave/valor y después de la URL.  */
app.get('/elements',  (req, res)=>{
    res.sendFile(__dirname + '/public3/views/elements')
})

app.get('*',  (req, res)=>{
    res.sendFile(__dirname + '/public/404.html')
})
// Le indicamos a nuestro servidor que escuche el puerto 8080
app.listen(port,()=>{
    console.log(`Escuchando en el puerto http:/localhost:${port}`);

}); 
