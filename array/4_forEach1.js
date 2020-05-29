// Criando um array
const aprovados = ['Alex', 'Thaís', 'Michele', 'Carol']

// forEach sempre pasa três parâmetros: nome, índice e array 
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

/**
 * 1. nome é o parâmetro da função arrow.
 * 2. nome irá receber o primeiro parâmetro passado pelo forEach, 1 de cada vez.
 * 3. Será exibido conforme abaixo:
        Alex
        Thaís
        Michele
        Carol
*/
aprovados.forEach(nome => console.log(nome))

// Usando forEach após atribuir uma função a uma variável
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


console.log("******Pilotos********")

const pilotos = ['Alonso', 'Massa', 'Rubens', 'Hamilton']
pilotos.forEach(piloto => console.log(piloto))

console.log("#####Pilotos#####")
const exibirPilotos = piloto => console.log(piloto)
pilotos.forEach(exibirPilotos)