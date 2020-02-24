const express = require('express');
const server = express();
const colors = require('colors');

server.get('/', function(req,res){
    res.send('<h1>Hola con express y nodejs</h1>');
    res.end();
});
server.listen(3000, function(){
    console.log('Servidor en puerto 3000'.red);
    
});