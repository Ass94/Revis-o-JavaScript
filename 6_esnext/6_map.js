// Utilizando get and set herdados de Objects
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})
// Nota-se que só acessamos os atributos setados através do get
console.log(tecnologias.react)
console.log(tecnologias.get('react').framework) // => false
console.log(tecnologias.get('angular').framework) // => true

const chavesVariadas = new Map([
    [function () { }, 'Função'], // chave: function.
    [{}, 'Objeto'], // chave: objeto.
    [123, 'Número'] // chave: literal numérico.
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

// Em chavesVariadas tem a chave: 123?
console.log(chavesVariadas.has(123)) // => true
chavesVariadas.delete(123) // deletar chave 123
console.log(chavesVariadas.has(123)) // => false
console.log(chavesVariadas.size) // => tamanho: 2 (duas chaves)

chavesVariadas.set(123, 'ABC') // inserindo chave 123 valor 'ABC'
console.log(chavesVariadas.size) // => tamanho: 3 (três chaves)
console.log(chavesVariadas)