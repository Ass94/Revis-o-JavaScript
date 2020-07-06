// Criando um array de objetos:
const produtos = [
    {nome: 'Notebook', preco: 2900, fragil: true},
    {nome: 'iPad', preco: 4500, fragil: true},
    {nome: 'Copo de vidro', preco:12.99, fragil: true},
    {nome: 'Copo de plástico', preco: 5.99, fragil: false},
]

// return false: nenhum array filtrado.
// return true: todos array filtrados, logo, todos elementos serão exibidos.

console.log(produtos.filter(function(p){ // o método filter recebe um callback
    return false
}))

// criando função maiorPreco. Irá filtrar produtos acima de R$ 500
const maiorPreco = produto => produto.preco >= 500
// criando função menorPreco. Irá filtrar os produtos abaixo de R$ 100 
const menorPreco = produto => produto.preco <= 100
// função que irá filtrar os produtos frágeis:
const produtoFragil = produto => produto.fragil 

// filtra maior preco:
console.log("Maior")
console.log(produtos.filter(maiorPreco))
// filtra menor preco:
console.log("Menor")
console.log(produtos.filter(menorPreco))
// filtra produto frágil
console.log("Frágil")
console.log(produtos.filter(produtoFragil))