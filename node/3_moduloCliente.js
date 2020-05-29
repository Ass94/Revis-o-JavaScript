// importanto os módulos A e B para suas respectivas constantes
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

// Após a importação, podemos acessar variáveis e funções dos módulos A e B que foram configuradas como exports (públicas)
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)