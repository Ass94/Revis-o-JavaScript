const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // Faz requisições para obter informações de algo que está remoto.

const chines = f => f.pais === 'China' // Função que filtra por país
const mulheres = f => f.genero === 'F' // Função que filtra por gênero.
const menorSalario = (func, funcAtual) => { 
    return func.salario < funcAtual.salario ? func : funcAtual
} // Função criada para servir de parâmetro a função reduce. Irá filtrar o menor salário.

// Obtém informações do servidor
axios.get(url).then(response => { // Utiliza a promisse then() para percorrer o resultado obtido através da requisição da url
    const funcionarios = response.data // Resultado armazenado um a um na variável funcionarios
    console.log(funcionarios)

    // Mulher chinesa com menor salário
    const func = funcionarios // Recebe funcionário de acordo com cada posição.
    .filter(chines) // Filtra por país
    .filter(mulheres) // Filtra por gênero.
    .reduce(menorSalario) // Filtra por menor salário.
 
    console.log(func) // Resultado dos filtros.
})
