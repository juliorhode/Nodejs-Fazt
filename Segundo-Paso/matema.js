
function sumar(x1, x2){
    return x1 + x2;
}
function restar(x1, x2){
    return x1 - x2;
}
function multiplicar(x1, x2){
    return x1 * x2;
}
function dividir(x1, x2){
    if(x2 == 0){
        console.log('No se puede dividir por 0');
    }else{
        return x1 / x2;
    }
}

// Todo esto lo puedo exportar como un objeto
/*
exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
*/

// Tambien podemos hacerlo es creando un objeto y asi poder exportar funciones, variables, etc
const Math = {};
Math.sumar = sumar;
Math.restar = restar;
Math.multiplicar = multiplicar;
Math.dividir = dividir;
module.exports = Math;

// Si queremos exportar una funcion
function hola(nombre){
    console.log('Hola ', nombre);
    
}
// module.exports = hola;