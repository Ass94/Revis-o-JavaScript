// O objeto das factorys é criar nova instância de objetos.

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desc: 0.10
    }
}

console.log(criarProduto('Celular', 2560.99))
console.log(criarProduto('Caderno', 15.99))