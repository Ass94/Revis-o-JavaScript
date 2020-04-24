const valor = 'global' // Escopo global, poderá ser utilizado em qualquer parte do código

function escopo () {
    console.log(valor)
}

escopo() // -> Global

function escopo1 () {
    const valor = 'Local' // Só existirá dentro do bloco da função.
    escopo()
}

escopo1() // -> Global