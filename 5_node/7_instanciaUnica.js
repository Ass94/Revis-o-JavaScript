// Apenas um objeto.
// A ausênica de uma função a torna uma instância unica.

module.exports = {
    valor: 1,
    inc() { // incrementar
        this.valor++
    }
}