// import
const fs = require('fs')

// Criando objeto
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

const alunos = [
    {nome: 'Alex'},
    {nome: 'Alice'},
    {nome: 'Arthur'},
    {nome: 'Matheus'}
]

/**
 * 1. Escrever um arquivo no diretório atual
 * 2. Converter objeto em json (formato texto)
 * 3. function err() que retornará erro, caso ocorra
 * 4. Se houver erro, o mesmo será retornado, caso contrário, retornará Arquivo Salvo
*/

fs.writeFile(__dirname + '/16_arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo com Sucesso!')
})

fs.writeFile(__dirname + '/16_arquivoGerado2.json', JSON.stringify(alunos), err => {
    console.log(err || 'Arquivo Salvo com Sucesso!')
})



