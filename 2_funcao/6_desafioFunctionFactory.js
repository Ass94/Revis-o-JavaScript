// Função construtora

function Pessoa(nome) {
    this.nome = nome
    this.falar = () => {
        console.log(`Olá, meu nome é: ${nome}`)
    }
}

const pessoa = new Pessoa('Alex')
pessoa.falar()


function Carro (marca, modelo, ano){
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano
    this.descricao = () => {
        console.log(`Marca: ${marca} Modelo: ${modelo} Ano: ${ano}`)
    }
}

const carro = new Carro('Audi', 'A1', 2013)
carro.descricao()