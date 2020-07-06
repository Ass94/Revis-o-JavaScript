const fs = require('fs')

// caminho recebe diretório + arquivo
const caminho = __dirname + '/14_arquivo.json'

// sincrono... 
// Lê o conteúdo no descrito na constante caminho, formato UTF-8
const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo)

// assincrono 
// Não é recomendado, pois só será liberado depois de todo conteúdo tiver lido
/**
 * 1. fs invoca a função readFile, passando o caminho do arquivo, o formato desejado e uma callback com dois parâmetros.
 * 2. A constante configa receberá o conteúdo convertido no formato Json.
 * 3. Através da constante config, será acessados e exibidos os atributos  host e port.
*/
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Por ser Json, podemos fazer de forma mais simplicada, conforme abaixo:
// Já traz o arquivo convertido em objeto
const config = require('./14_arquivo.json')
console.log(config.db)

// Lendo arquivos de pastas// __dirname -> representa diretório atual
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos) // Retornou um array de todos os arquivos da pasta atual (__dirname) -> pasta node
})