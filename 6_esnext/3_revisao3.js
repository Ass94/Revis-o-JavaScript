// ES8: Object.value() / Object.entries()

const objeto = {
    a: 1,
    b: 2, 
    c: 3
}

const entries = Object.entries(objeto)
const values  = Object.values(objeto)
console.log(`Chaves e Valores: ${entries}`)
console.log(`Valores: ${values}`)

// Melhoria na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Olá, bom dia!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au, Au'
    }
}

class Gato extends Animal {
    falar() {
        return 'Miau, Miau'
    }
}

console.log(new Cachorro().falar())
console.log(new Gato().falar())

