// Array Literal:
const nums = [1, 2, 3, 4, 5]

// map() -> for com propósito.
// map() não altera o array, simplemente retorna um novo array modificado.

// Variável resultado irá receber um novo do método map.
// Cada elemento do array será multiplicado por 2
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

let res = nums.map(elemento => {
    return elemento + 1
})

console.log(res)

// Função arrow tem o retorno implícito
const soma10 = parametro => parametro + 10

const triplo = parametro => parametro * 3

const paraDinheiro = parametro => `R$ ${parseFloat(parametro).toFixed(2).replace('.', ',')}`

/**
 * resultado recebe:
 * 1. Os elementos do array nums mais 10
 * 2. Em seguida os elementos do array serão multiplicados por 3
 * 3. Por fim, os elementos serão formatados para valores monetários em reais.
 * 4. Resultado final: [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
*/

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // Ou seja, map(callback) map(callback) map(callback)
console.log(resultado)