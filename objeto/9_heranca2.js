// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 0;
const avo = {attr1: 'A'} // Cria um objeto com o atributo: attr1
const pai = {__proto__: avo, attr2: 'B'} // Cria um objeto que herda de objeto avo. Cria um atributo attr2
const filho = {__proto__: pai, attr3: 'C'} // Cria um objeto filho que herda de propriedades do objeto pai. Cria um objeto attr3.

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // => 0 A B C (Objeto filho herda de todos os anteriores)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// Estabelecendo relação de prototype entre ferrari e carro e volvo e carro.
Object.setPrototypeOf(ferrari, carro) // ferrari herda propriedade de carro.
Object.setPrototypeOf(volvo, carro) // volvo herda propriedade de carro.

console.log(ferrari)
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(300)
console.log(ferrari.status())