const sequencia = {
    _valor: 1, // De acordo com a convenção, Endentes _ como atributo privado
    get valor() { return this._valor }, // get utilizado de forma semelhante a declaração de váriais e function
    set valor(valor) {
        return this._valor = valor
    } 
}

console.log(sequencia.valor, sequencia.valor) // como se fosse: sequencia.getValor().
sequencia.valor = 1000 // Ou seja, setValor(1000).
console.log(sequencia.valor, sequencia.valor) // => 1000 1000