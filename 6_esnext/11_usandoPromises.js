/**
 * 1. constante http para realizar as requisições e receber as respostas
 * 2. Criar método getTurma(letra) que irá realizar a requisição de acordo com a letra passada por parâmetro.
 * 3. Definir URL, ou seja o caminho para buscar as turmas.
 * 4. Instanciar a Promise, passando como parâmetro resolve e reject.
 * 5. através da constante http realizar uma busca utilizando o método http get. 
 * 6. A reposta será incrementada na variável resultado pela variável dados.
 * 7. Por fim, após o conteúdo de resultado deverá ser convertido para o formato Json.
 * 
 * 8. Utilzando Promise.all(), buscaremos pela turma A, B e C.
 * 9. Utilizando then() setaremos as turmas, os alunos e seus devidos nomes.
 * 10. Caso algo inesperado aconteça, utilizamos catch() para lançar uma mensagem de erro. 
*/






const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

// Demonstrando reject. Acessando turma que não existe.
getTurma('D').catch(e => console.log(e.message))