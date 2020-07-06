// Usando a notação literal
const obj1 = {} // Criando um objeto vazio
console.log(obj1) // => {}

// Objeto em JS
console.log(typeof Object, typeof new Object) // => (Object: function) (new Object: object)
const obj2 = new Object
console.log(obj2) // => {}

//Funções construtoras:
function Produto (nome, preco, descricao, desc){
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const caneta = new Produto('caneta', 2.50, 'Nova caneta bic', 0.15)
console.log(caneta.getPrecoComDesconto())

// Função Factory (Padrão de Projeto)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 2500, 1)
const f2 = criarFuncionario('Pedro', 2500, 6)
const f3 = criarFuncionario('José', 3600, 0)
console.log(`${f1.nome} : ${f1.getSalario()}`)
console.log(`${f2.nome} : ${f2.getSalario()}`)
console.log(`${f3.nome} : ${f3.getSalario()}`)


// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

const filho = Object.create({
    nome: 'Matheus',
    idade: 10
})
console.log(filho) // => {}
console.log(filho.nome) // => Matheus
console.log(filho.toString()) // => [object Object]

// Uma função famosa que retorna Object
const fromJSON = JSON.parse('{"nome": "Alex", "idade": 25}')
console.log(fromJSON.nome) // => Alex
console.log(fromJSON) // => { nome: 'Alex', idade: 25 }