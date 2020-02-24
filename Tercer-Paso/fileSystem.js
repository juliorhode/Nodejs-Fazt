const fs = require('fs');

// Esto se llama codigo asincrono y no bloqueante
// Para crear un archivo
fs.writeFile('./texto.txt','linea uno',function(err){
    // Estas funciones (callback) se ejecutan cuando temina lo que esta haciendo... son para saber si todo salio bien o no al finalizar la tarea
    if (err) {
        console.log(err);
        
    } else{
        console.log('Archivo creado');
        
    }
});
console.log('Ultima linea de codigo');

// Esto se llama codigo asincrono y no bloqueante
fs.readFile('./texto.txt',function(err, data){
    if (err) {
        console.log(err);
        
    }else{
        console.log(data);
        // esto devuelve un Buffer: <Buffer 6c 69 6e 65 61 20 75 6e 6f>
        console.log(data.toString());

        
    }
})
