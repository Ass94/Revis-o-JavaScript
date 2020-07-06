const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

// Retorna um novo array com as notas dos alunos
console.log(alunos.map(a => a.nota))

/**
 * 1. alunos.map() para gerar um novo array apenas com as notas.
 * 2. reduce() recebe uma callback com dois parâmetros
 * 3. acumulador irá receber a soma dos elementos (atual) um a um.
 * 4. 0 indica que o reduce iniciará com zero.
 */

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)


console.log("Somando números")

const nums = [10, 20, 30, 40, 50, 60]
const contador = nums.reduce(function(somador, atual){
    console.log(somador, atual)
    return somador += atual
}, 0)

console.log(contador)

console.log("Total de Ponto dos pilotos")

const pilotos = [
    {nome: 'Massa', pontos: 280},
    {nome: 'Hamilton', pontos: 350},
    {nome: 'Raikonen', pontos: 230}
]

const somaTotal = pilotos.map(p => p.pontos).reduce(function(calculador, atual){
    return calculador += atual
}, 0)

console.log(somaTotal)