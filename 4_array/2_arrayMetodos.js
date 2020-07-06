// Array declarado como constante. Dessa forma não poderemos adicionar mais nenhum elemento. Apenas manipular os existentes

const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

// Remover o último elemento do array
pilotos.pop()
console.log(pilotos)

// Remover o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

// Inserir elemento na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice. Método que pode tanto incluir quanto excluir elementos.
pilotos.splice(2, 0, 'Botas', 'Massa') // A partir do elemento dois (2), não excluir nenhum elemento (0). Adicionar 'Botas', 'Massa'
console.log(pilotos) 

// Incluir mais um elemento de acordo com a posição.
pilotos.splice(5, 0, 'Alex') // A partir do elemento 5, não execluir nenhum elemento existente (0), incluir 'Alex'
console.log(pilotos)

// A partir do terceiro elemento, excluir um elemento.
pilotos.splice(3, 1)
console.log(pilotos)

// Retornar um novo array da posição 0 a posiçã 2. Portanto 3 elementos
const algunsPilotos = pilotos.splice(2)
console.log(algunsPilotos)

// Pegar do índice 1 ao 4 (exclusive)
const algunsPilotos2 = pilotos.splice(1, 4)


