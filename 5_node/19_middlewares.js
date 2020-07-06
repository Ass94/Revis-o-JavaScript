// Middleware pattern (chain of responsability)

/**
 * 1. Passar o contexto.
 * 2. chama a próxima instrução utilizando a função next()
*/

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

// Aqui passaremos apenas o contexto
const passo3 = contexto => contexto.valor3 = 'mid3'
/**
 * 1. O método executar recebe dois parâmtros: contexto e ...middlewaes
 * 2. Conexto irá receber um objeto vazio.
 * 3. middlewaes irá receber um conjusnto de middlewaes (passo1, passo2, passo 3)
 * 4. a consta executarPassos recebe o índice e posteriormente o contexto de acordo com índice.
*/
const executar = (contexto, ...middlewaes) => {
    const executarPasso = indice => {
        middlewaes && indice < middlewaes.length && 
        middlewaes[indice](contexto, () => executarPasso(indice + 1))
    }

    executarPasso(0)
}

// Recebe o contexto e os passos que irão popular o contexto
const contexto = {}
executar(contexto, passo1, passo2, passo3)
console.log(contexto)