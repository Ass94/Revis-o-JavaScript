// Criando array de alunos

const aluons = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
debugger
const todosBolsistas = (resultado, bolsista) => resultado && bolsista // retorna uma expressão boolean.
console.log(aluons.map(a => a.bolsista).reduce(todosBolsistas)) // Irá verificar se todos alunos são bolsistas. false, pois nem todos alunos são bolsistas

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(aluons.map(a => a.bolsista).reduce(algumBolsista)) // true: alguns alunos são bolsistas


// Desafio 3: Todos carros são vermelhos?
const carros =[
    {modelo: 'Gol', vermelho: false},
    {modelo: 'Opala', vermelho: true},
    {modelo: 'Golf', vermelho: true},
    {modelo: 'Vera Cruz', vermelho: false},
]

console.log("Carros:")

const todosVermelhos = (resultado, vermelho) => resultado && vermelho // (true se os dois forem verdadeiros)
console.log(carros.map(c => c.vermelho).reduce(todosVermelhos))

// Desafio 4: Algum carro vermelho
const algumVermelho = (resultado, vermelho) => resultado || vermelho
console.log(carros.map(c => c.vermelho).reduce(algumVermelho))
/**
 * 1. carros.map() para gerar um array apenas com o atributo boolean vermelho
 * 2. reduce() recebe um callback que avalia o valor boolean dos dois parâmetros
 * 3. resultado: recebe o valor boolean do parâmetro vermelho.
 * 4. Posteriormente os dois parâmetros são avalidados.
 * 5. Percorrendo todos elementos do array. 
 * 6. O primeiro parâmetro do reduce sempre recebe o valor do segundo parâmetro.
 * 7. retornará true ou false de acordo com o operador lógico utilizado.
*/
