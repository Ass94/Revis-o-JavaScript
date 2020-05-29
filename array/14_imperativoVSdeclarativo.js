// Criando array  de objeto 
const alunos =[
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

/**
 * 1. Percorrer o array alunos de acordo com o seu tamanho (length).
 * 2. atribuir a variável total a nota do aluno de acordo com a posição alunos[i]
*/

// Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length) // Exibi a média 

// Declarativo
const getNota = aluno => aluno.nota 
const soma = (total, atual) => total += atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
/**
 * 1. Criar função arrow que irá pegar a nota de aluno por aluno.
 * 2. criar uma fução que irá somar as notas, onde total receberá atual um a um.
 * 3. map() criará um novo array apenas com as notas.
 * 4. reduce() irá retornar o total (soma das notas)
*/

