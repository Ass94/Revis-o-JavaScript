// Como funciona o reduce

Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))

/**
 * 1. reduce2() recebe um função callback e um valor inicial (ponto de partida) 0, 1, ...30  ...
 * 2. a variável indiceInicial recebe a quantidade de iterações que deverá ser realizada. (verdadeiro inicia com 0, false inicia com 1)
 * 3. acumulador será setado com o valor inicial ou elemento autal na posição zero (0)
 * 4. for() iterar de acordo com o valor do indice inicial.
 * 5. acumulador: receberá a callback (soma), os elementos um a um (this[i]), os índices um a um e o próprio array 
 * 6. retorna acumulador.
 * 7. O segredo está no propósito da função callback.
*/