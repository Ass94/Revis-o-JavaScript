// imports
const contadorA = require('./7_instanciaUnica')
const contadorB = require('./7_instanciaUnica')
// Retorna um objeto (Usando Factory)
const contadorC = require('./6_instanciaNova')()
const contadorD = require('./6_instanciaNova')()

contadorA.inc()
contadorA.inc()
// A alteração também ficou visível ao contadorB (Instância única)
console.log(contadorA.valor, contadorB.valor) // => 3 3

// Agora veja utilizando o módulo instanciaNova, que retorna sempre um novo obojeto.

contadorC.inc()
contadorC.inc()
// O contadorD não assumirá os valores do contadorC. (Instâncias diferentes)
console.log(contadorC.valor, contadorD.valor) // 3 1