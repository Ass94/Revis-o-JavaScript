// Coleção dinâmica de pares (chave / valor)

const produto = new Object

// Adicionando propriedade e valores
produto.nome = 'Mesa'
produto ['marca do produto'] = 'Genérica'
produto.preco = 220.00

console.log(produto)
delete produto.preco
console.log(produto)
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000.00,
    proprietario: {
        nome: 'Alex',
        idade: 25,
        endereco: {
            logradouro: 'Rua Jasmiro Teixeira',
            numer: 86
        }
    },
    // Array de objetos
    condutores: [{
        nome: 'Junior',
        idade: 29
    }, {
        nome: 'Ana',
        idade: 28
    }, {
        nome: 'Carla',
        idade: 32
    }, {
        nome: 'Roberto',
        idade: 27
    }],
    calcularValorSeguro() {
    
    }
}

console.log(carro)
console.log(carro.endereco)
console.log(carro.condutores)
console.log(carro.calcularValorSeguro)