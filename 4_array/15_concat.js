const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Marcos', 'Carlos']
const todos = filhas.concat(filhos, 'Fulano') // junção de todos elementos do array, também adiciona um novo elemento (Fulano)
console.log(todos, filhas, filhos)

console.log([].concat([],[], 5, [[6,7]])) // Junção dos arrays que contém elementos [ 5, [ 6, 7 ] ]