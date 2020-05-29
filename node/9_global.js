// global permite que o módulo seja visto por todos módulos.
// freeze() congela o objeto, em outras palavras, não permite que o objeto seja alterado.
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema legal!'
})
