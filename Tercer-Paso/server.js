// Nos permite es utilizar protocolo http en nuestro servidor para recibir solicitudes de clientes y responder
const http = require('http'); 
const colors = require('colors');
// Esto va a tomar tiempo y nodejs no va a esperar por el, para eso utiliza una funcion y cuando termine, el continua cpn lo que esta dentro de la funcion
/*
http.createServer(function(req, res){
    // req = peticion; res = respuesta
    // tipo de contenido
    res.writeHead(200,{ 'Content-type':'text/html' })
    res.write('<h1>Hola desde Nodejs</h1>');
    // con esto termino la respuesta
    res.end();
}).listen(3000);
*/

// Otra forma de hacerlo
const respuestaServer = function(req, res){
    // req = peticion; res = respuesta
    // tipo de contenido
    res.writeHead(200,{ 'Content-type':'text/html' })
    res.write('<h1>Hola desde Nodejs</h1>');
    // con esto termino la respuesta
    res.end();
}

const server = http.createServer(respuestaServer);
server.listen(3000, function(){
    console.log('Servidor en puerto 3000'.yellow);
});