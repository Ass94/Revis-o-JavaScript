const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // a recebe a, b recebe b, c recebe c
const obj2 = {a, b, c} // forma reduzida
console.log(obj1, obj2) // => { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }

const nomeAtt = 'nome'
const valorAtt = 7.5

const obj3 = {}
obj3[nomeAtt] = valorAtt
console.log(obj3) // => { nome: 7.5 }

const obj4 = {
    function: function() {
        //...
    },
    function2 () {
        // ...
    }
}

console.log(obj4)