const carro = {
    marca: 'Audi',
    modelo: 'A1',
    ano: 2013,
    fabricante: {
        nome: 'Volkswagen',
        local: 'Alemanha'
    }
}

const {modelo, ano} = carro
const {nome} = carro.fabricante

console.log(modelo, ano, nome)