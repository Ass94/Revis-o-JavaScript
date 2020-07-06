console.log(typeof String) // 1. String é do tipo function.
console.log(typeof Array) // 2. Array é do tipo function.
console.log(typeof Object) // 3. Object é do tipo function.

/**
 * 1. criar um função dentro de String.
 * 2. Utilizando this para pegar o objeto atual adicionar (split('')) 
 * 3. split('') irá transformar a string em um array de caracteres separados por vírgula.
 * 4. reverse() alterar a ordem. Exemplo: mao; reverse de mao: oam
 * 5. join() irá juntar / contatenar os caracteres em uma única string.
*/
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r' .reverse())


/**
 * 1. Adiciona uma função chamada first ao Array.
 * 2. A função first irá retornar o primeiro elemento do array atual (this)
*/

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4,].first()) // => 1.
console.log(['a', 'b', 'c', 'd'].first()) // => a

/**
 * 1. Criando minha primeira função em um array.
*/

Array.prototype.second = function () {
    return `Segundo elemento do array: ${this[1]}`
}

const numeros = [1, 2, 3, 4, 5, 6]
console.log(numeros.second())


