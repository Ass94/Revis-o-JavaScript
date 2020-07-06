// module.exports: tornando o módulo público.
module.exports = function (...nomes) {
    return nomes.map(nome => `Boa semana ${nome}`)
}

// map sempre retorna um novo array.