const pessoa = {
    nome: 'João',
}
console.log(pessoa) // { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa) // { nome: 'Pedro' }

Object.freeze(pessoa) // Congela o objeto pessoa. Dessa forma, não pode mais ser alterado.

pessoa.nome - 'Carlos'
console.log(pessoa) // { nome: 'Pedro' }

const pessoaConstante = Object.freeze({nome: 'Marcos'})
console.log(pessoaConstante) // { nome: 'Marcos' }

pessoaConstante.nome = 'José'
console.log(pessoaConstante) //{ nome: 'Marcos' }