// let, const e var

{
    var a = 2 // var escopo global ou de função.
    let b = 3 // escopo global, de função ou de bloco
    const e = 5 // escopo global, de função ou de bloco

    // e = 10 -> ERRO! Constante não pode ser alterada.

    console.log(b) // só poderá ser acessada dentro do bloco ao qual foi declarada.
    console.log(e) // só poderá ser acessada dentro do bloco ao qual foi declarada.
}

// console.log(b) fora do bloco a variável b do tipo let não existe.

// console.log(e) fora do bloco a variável e do tipo const não existe.

console.log(a) // a variável a do tipo var não possui escopo de bloco.

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [c, d, ...demais] = "Alex"
console.log(c, d, demais) // A l [ 'e', 'x' ]

const [x, ,y] = [1, 2, 3]
console.log(x, y) // 1 3 ignora o vazio, ou seja, não pega o número 2

// Objeto
const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(idade, nome) // 9 Ana