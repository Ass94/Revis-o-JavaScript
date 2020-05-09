const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200,
}

// Função contrutora.
function CriarCarro(carro, ano) {
    this.carro = carro;
    this.ano = ano;
}

// Para utilizar função contrutora torna-se necessário o uso de new.
const corsel = new CriarCarro('Corsel', 2002)
console.log(corsel)



// Acessar atributos do objeto pai: __proto__
console.log(ferrari.__proto__) // => {}
console.log(ferrari.prototype) // => udefined
console.log(CriarCarro.__proto__) // Função anônima.

console.log(ferrari.__proto__ === Object.prototype) // => true: Ou seja, o prótotipo de ferrari é o mesmo de Object.prototype.

console.log(volvo.__proto__ === Object.prototype) // => true: são extritamente iguais.

console.log(ferrari.__proto__ === volvo.__proto__) // => true. Herdam o mesmo protótipo (Object.prototype)

function meuObjeto() {}

console.log(typeof Object, typeof meuObjeto) // Ambos são do tipo function.
console.log(typeof Object.prototype, meuObjeto.prototype) // Protótipo de Object: object. Protótipo de meuObject: {}
