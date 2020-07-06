/**
 * # Arrow Function #
 * (a, b) São os parâmetros da função.
 * => Símbolo que representa arrow function.
 * a + b; A função retornará a soma de dois valores (return implícito).
 * Arrow Function sempre será uma função anônima. Por conta disso, sempre deverá ser atribuída a uma variável.
*/

const soma = (a, b) => a + b 
console.log(soma(10, 20))

/**
 * Arrow Function - Conceito this.
 * this sempre apontará para exports.
 * () arrow function sem parâmetros.
 * bind() apontar para
*/

const lexico1 = () => console.log(this === exports)
lexico1() //=> true

const lexico2 = lexico1.bind({})
lexico2()

// Parâmetros default
function log(texto = 'NodeJS') {
    console.log(texto)
}

log() // => NodeJS
log('Alex de Souza Silva') // => Alex de Souza Silva

// Operador rest (agrupar)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log('Toltal recebendo parâmetros literais')
console.log(total(1, 2, 3)) // passamos valores variados (1, 2, 3) e retornamos o valor agrupado: 6
console.log('Total recebendo array')
const notas = [10, 8, 7, 9]
console.log(total(notas)) // resultado: 010,8,7,9. A Função não está esperando receber um array, mas sim, números soltos.

