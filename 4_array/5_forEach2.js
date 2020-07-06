// Desafio da implementação da instrução forEach

// Adicionando a função forEach2 em array.
Array.prototype.forEach2 = function(callback) { // recebe uma função que recebe como parâmetro uma outra função (callback)
    for (let i = 0; i < this.length; i++) { // percorre de acordo com o tamanho do array atual
        callback(this[i], i, this) // retorna o elemento na posição i (this[i]); o índice (i) e o próprio array (this)
    }
}

// Criando o array 
const aprovados = ['Alex', 'Pedro', 'Paulo']

// forEach sempre passa três parâmetros: nome, índice e array
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

