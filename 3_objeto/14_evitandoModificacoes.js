// Object.preventExtensions() -> Não permite adicionar novos atributos ao objeto.

// Definindo o objeto não extensível:
const produto = Object.preventExtensions({
    nome: 'Televisão', preco: 2589, tag: 'promocao'
})

// Produto é extensível? false.
console.log('Extensível: ', Object.isExtensible(produto))
console.log(produto)
// Tentativa de alterar a propriedade nome:
produto.nome = 'Borracha'
console.log(produto) // => Nome do produto alterado com sucesso.
// Tentativa de adicionar novo atributo:
produto.descricao = 'Borracha escolar branca'
console.log(produto) // Sem sucesso. Uma vez que o objeto com a função preventExtensions(), não é possível adicionar novos atributos.
// Tentativa de deletar um atributo do objeto não extensível:
delete produto.tag
console.log(produto) // Exclusão efetuada com sucesso. Não pode adicionar, porém pode excluir.

// Selando objetos. 
// Utilizando a função seal podemos selar um objeto. 
// Será possível altear as propriedades dos atributos. Mas, não será possível adicionar ou deletar atributos.
const pessoa = {nome: 'Juliana', idade: 30}
Object.seal(pessoa)
console.log(pessoa)
// Verifica se o objeto é selado:
console.log('Selado: ', Object.isSealed(pessoa)) // => verdadeiro. Objeto é selado.
// Tentativa de adicionar novo atributo:
pessoa.sobremone = 'Oliveira'
console.log(pessoa) // Não é possível adicionar novo atributo.
// Tentativa de deletar um atributo do objeto pessoa
delete pessoa.nome
console.log(pessoa) // Tentativa de deletar inválida. Objeto é selado.
// Tentativa de alterar o valor do atributo idade.
pessoa.idade = 42
console.log(pessoa) // Tentativa inválida. Objeto é selado.