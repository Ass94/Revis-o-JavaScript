// Criando um objeto cuja chave (key) representa o índice do array.

const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)

// Convertendo para JSON
const quaseArrayJson = JSON.stringify(quaseArray)
console.log(JSON.stringify(quaseArrayJson))

const quaseArrauObject = JSON.parse(quaseArrayJson)
console.log(quaseArrauObject)

// Definindo propriedade toString para o objeto quaseArray
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)