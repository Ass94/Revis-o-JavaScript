const carro = {
    marca: 'Audi',
    modelo: 'A1',
    ano: 2013
}

console.log(Object.keys(carro)) // Retorna as keys (chaves) do objeto: 'marca', 'modelo', 'ano'

console.log(Object.values(carro)) // Retorna os values (valores) de cada chava: 'Audi', 'A1', 2013

console.log(Object.entries(carro)) // Retorna um conjunto de chava-valor: [ [ 'marca', 'Audi' ], [ 'modelo', 'A1' ], [ 'ano', 2013] ]


/**
 * 1. Chama a função entries de Object passando o objeto carro com parâmetro.
 * 2. Chama a função forEach para percorrer o objeto.
 * 3. Dentro de forEach, passamos dois parâmetros que serão setados de acordo com cada iteração. 
 * */

Object.entries(carro).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


// Definir nova propriedade no objeto carro:
/**
 * 1. Chamar a função defineProperty, passar o objeto e nome da nova propriedade.
 * 2. e configurá-la de acordo com as 4 propriedade que um atributo possui.
*/
Object.defineProperty(carro, 'fabricante', {
    enumerable: true, // Será enumerável? Sim.
    writable: false, // Poderá ser alterada? Não. Ou seja, apenas leitura.
    configurable: true, // Será configurável? Sim,
    value: 'VolksWagen' // Inserindo valor à propriedade. 
}) 

console.log(Object.entries(carro)) [ [ 'marca', 'Audi' ], [ 'modelo', 'A1' ], [ 'ano', 2013], [ 'fabricante', 'VolksWagen' ] ]

