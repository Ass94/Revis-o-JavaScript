console.log(multiplicar(10, 10)) // Içamento. Consigo utilizar antes da declaração da função. Automaticamente a declaração da função e içada para cima.
console.log(potenciacao(10, 2)) // Não funciona, pois não ocorre o processo de içamento.

// Declarando função:
function multiplicar (x, y) {
    return x * y
}

// Atribuindo a uma variável constante
const potenciacao = function (base, potencia) {
    return Math.pow(base, potencia)
}

console.log(potenciacao(10, 2))