// Sem promise...


/**
 * 1. Importar módulo http.
 * 2. criar função getTurma que recebe dois parâmetros: uma variável e uma função callback.
 * 3. configurar url, sendo que a letra de cada turma será setada de forma dinâmica, de acordo com o parâmetro letra.
 * 4. A constante http invoca o método get passando a url e a variável res que retornará com a resposta da requisição get.
 * 5. Inicializa resultado.
 * 6. res.on() passará o resposta da requisição para variável resultado.
 * 7. res.on() exibirá a resposta do servidor no formato json.
 * 8. criar array nomes.
 * 9. Por fim, chamamos o método getTurma passando a letra e a função callback, onde 
 * o parâmetro da função arrow (alunos) recebe o nome dos alunos de acordo com a letra da turma.
*/

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})