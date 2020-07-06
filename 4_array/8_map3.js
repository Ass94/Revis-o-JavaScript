// Como o map funciona: 

// Adicionar função map2 no Objeto Array
Array.prototype.map2 = function(callback) { // map2 recebe uma função que possui uma função callback como parâmetro.
    const newArray = [] // declara o novo array que será retornado
    for (let i = 0; i < this.length; i++){ // percorre todo array passado como parâmetro.
        newArray.push(callback(this[i], i, this)) // em cada iteração será adicionado o elemento no newArray
    }
    return newArray // retorna o newArray populado.

}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const jsonToObject = json => JSON.parse(json)
const preco = produto => produto.preco

/**
 * 1. Cria um novo array de objetos.
 * 2. retorna um novo array apenas com os preços
 */
const resultado = carrinho.map2(jsonToObject).map2(preco)
console.log(resultado)
