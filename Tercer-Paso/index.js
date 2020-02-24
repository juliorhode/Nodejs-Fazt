const os = require('os');


console.log('Memoria libre:',os.freemem(),' bytes');
console.log('Memoria Total:',os.totalmem(),' bytes');
console.log('Nombre del host:',os.hostname());
console.log('Plataforma:',os.platform());
console.log('Release del SO:',os.release());
console.log('SO:',os.type());
// console.log('Network:',os.networkInterfaces());
