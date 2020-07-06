// Criando um objeto:
const objeto = {
    nome: 'Alex', 
    sobrenome: 'Souza', 
    idade: 25, 
    imc() {
        return 80 / Math.pow(1.78, 2)
    }
}
console.log('IMC: ', objeto.imc())

// Utilizando função stringify para converter objeto em JSON.
console.log(JSON.stringify(objeto))
// Resultado do objeto convertido:
// {"nome":"Alex","sobrenome":"Souza","idade":25}

// Convertendo JSON em objeto:

console.log(JSON.parse('{"nome":"Alex","sobrenome":"Souza","idade":25}'))
// Resultado do JSON convertido:
// { nome: 'Alex', sobrenome: 'Souza', idade: 25 }
