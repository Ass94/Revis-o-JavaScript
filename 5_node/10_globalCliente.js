// imports
require('./9_global')

console.log(MinhaApp.saudacao()) // => Estou em todos os lugares!

// Pelo fato de estar usando a função freeze() na criação do objeto, não será possível alterá-lo

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) // => Sistema legal!
