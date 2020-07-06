// for of itera em cima de valores

for (let letra of "Cod3r"){
    console.log(letra)
}

for (let nomeSoletrado of "Alex") {
    console.log(nomeSoletrado)
}

const assuntosEcma = ['Map', 'Set', 'Promise']
// Retornará o índice de cada elemento do array. [0] Map, [1] Set, [2] Promise
for (let i in assuntosEcma){
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false}]
])

// retornará os elementos do array.
for (let assunto of assuntosMap) {
    console.log(assunto)
}
// Retornará a chave de cada elemento do array: Map, Set, Promise
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
// retornará os valores de cada elemento do array: { abordado: true }, { abordado: true }, { abordado: false }
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
// Retornará chave e valor de cada elemento do array.
for (let[ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s) {
    console.log(letra)
}

// Set não permite repetição de elemento.
const c = new Set(['a', 'a', 'b', 'b', 'c'])
for(let element of c) {
    console.log(element)
}