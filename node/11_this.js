// A palavra reservada this aponta para module.exports

console.log(this === global) // => false
    console.log(this) // => {} (Objeto vazio)
    console.log(global) // => Será exibido as funções de global

console.log(this === module) // => false

console.log(this === module.exports) // => true
    console.log(module.exports) // => {} (Objeto vazio)

console.log(this === exports) // => true
    console.log(exports) // => {} (Objeto vazio)

/**
 * 1. Dentro de uma função, this e exports são diferentes.
 * 2. Dentro de uma função, this aponta para global.
*/

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // => false
    console.log(this === module.exports) // => false
    console.log(this === global) // => false
}

// Invocando a função
logThis()