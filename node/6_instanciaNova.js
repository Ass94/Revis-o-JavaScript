// Uma factory retorna um novo objeto:
// A presença de uma função faz com que retorne um novo objeto a cada chamada.
module.exports = () => {
    return {
        valor: 1,
        inc () { // incrementar
            this.valor++
        }
    }
}