// Em JavaScript o array é dinâmico.
console.log(typeof Array, typeof new Array, typeof []) // => function, object, object

// Atribuindo um array de três elementos a uma variável.
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

console.log(aprovados[0]) // Imprima elemento da posição 0
console.log(aprovados[1]) // Imprima elemento da posição 1
console.log(aprovados[2]) // Imprima elemento da posição 2
console.log(aprovados.length) // Tamanho = 3

// Adicinando elemento na posição 3
aprovados[3] = 'Paulo'
console.log(aprovados[3]) // Imprima elemento da posição 3
console.log(aprovados.length) // Tamanho = 4

// Método que adiciona elemento na última posição do array
aprovados.push('José')
console.log(aprovados[4]) // Imprima elemento na posição 4
console.log(aprovados.length) // Tamanho = 5 

// Ordenando array
console.log(aprovados)
aprovados.sort()
console.log(aprovados) // => Array ordenado em ordem alfabética.

// Apartir do elmento 4, excluir um elemento
aprovados.splice(4, 1) // Lembrando: o quarto elemento possui index 3. Logo, Paulo foi excluído.
console.log(aprovados)
console.log(aprovados.length) // Tamanho = 4

// Apartir do elemento 0, excluir um elemento
aprovados.splice(0, 1) // Ana será excluída. Lembrando que ordenamos o array.
console.log(aprovados)
console.log(aprovados.length) // Tamanho = 3