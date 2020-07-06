// Factorys tem como objetivo fabricar instâncias de objetos:

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())


function criarCarro() {
    return {
        modelo: 'A1',
        marca: 'Audi',
    }
}

console.log(criarCarro())