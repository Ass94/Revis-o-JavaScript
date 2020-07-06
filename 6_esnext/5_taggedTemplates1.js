// tagged templates - Processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Matheus'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)