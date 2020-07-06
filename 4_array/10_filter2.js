// Criando método filter2

Array.prototype.filter2 = function (callback) { // filter2 recebe como parâmetro uma função callback.
    const newArray = [] // Cria um array vazio.
    for(let i = 0; i < this.length; i++){ // percorre a callback
        if (callback(this[i], i, this)){ // se houver elementos então:
            newArray.push(this[i]) // O array será populado.
        }
    }
    return newArray // retorna o novo array
}

// criar um array de objetos.

const produtos = [
    {nome:'Celular', preco: 2500, fragil: true},
    {nome: 'Caneca', preco: 30, fragil: true},
    {nome: 'lápis', preco: 2.50, fragil: false}
]

const maiorPreco = produto => produto.preco >= 100
const menorPreco = produto => produto.preco <= 100
const fragil = produto => produto.fragil

console.log("Maior Preço")
console.log(produtos.filter2(maiorPreco))
console.log("Menor preço")
console.log(produtos.filter2(menorPreco))
console.log("Frágil?")
console.log(produtos.filter2(fragil))