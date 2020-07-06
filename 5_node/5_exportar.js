console.log(module.exports) // Criando objeto vazio {}

console.log(module.exports === this) // => true
console.log(module.exports === exports) // => true

// Públicas (global) poderão ser vistas por outros módulos.
this.a = 1
exports.b = 2
module.exports.c = 3

// exports não receberá null
exports = null
console.log(module.exports) // =>  { a: 1, b: 2, c: 3 }

// continuará apontando para os mesmos valores setados anteriormente
exports = {
    nome: 'teste'
}

console.log(module.exports) // =>  { a: 1, b: 2, c: 3 }

// Forma correta de alterar exports. Necessário utilizar module.exports
module.exports = {
    publico: true
}

console.log(module.exports) // => { publico: true }