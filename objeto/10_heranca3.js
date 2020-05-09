// Criando objeto denominado pai
const pai = {nome: 'Pedro', cabelo: 'Preto'}

// Criando um o bjeto filha que herda as propriedade do objeto pai.
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome, filha1.cabelo)

// filha2 herda o objeto pai. Posteriormente, configura a propriedade valor para não poder ser alterada: writable: false;
const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' // Não pode ser alterada, pois a propriedade writable foi configurada como false.
console.log(filha2.nome, filha2.cabelo)

console.log('------Chaves-------')
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))
console.log('------Valores------')
console.log(Object.values(filha1))
console.log(Object.values(filha2))
console.log('-------Chave e valores-------')
//console.log(Object.entries(filha1))
//console.log(Object.entries(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}

