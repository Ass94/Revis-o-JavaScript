const pessoa = {
    nome: 'Alex',
    idade: 25,
    endereco: {
        numero: 86,
        logradouro: 'Rua Jasmiro Teixeira'
    }
}

/* Tirar do objeto pessoa, nome e idade*/

const {nome, idade} = pessoa;
console.log(nome, idade)

const {numero} = pessoa.endereco;
console.log(numero)
