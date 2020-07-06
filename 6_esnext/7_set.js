// Não aceita repetição / não indexada.

/**
 * 1. será criado uma lista de objetos com 6 times.
 * 2. new Set() não permite que acha valores repetidos.
 * 3. Logo, Vasco não será adicionado duas vezes
*/
const times = new Set()
times.add('São Paulo')
times.add('Vasco')
times.add('Santos').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.delete('Flamengo'))
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes) // new Set() não permitirá inclusão de valores repetidos, ou seja, Lucas nãos será incluso duas vezes
console.log(nomesSet)