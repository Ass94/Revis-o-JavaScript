// Operador (...) rest(juntar) / spread(espalhar)
// ** Usar rest com parâmetro de função **

// Usar spread com objeto
const funcionario = { name: 'Maria', salary: 12348.99 }

const clone = { ativo: true, ...funcionario } // vários funcionários poderão ser passados.
console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'] 
console.log(grupoFinal) // [ 'Maria', 'João', 'Pedro', 'Glória', 'Rafaela' ]

