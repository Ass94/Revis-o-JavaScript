// importando móduloA
const moduloA = require('../../moduloA')
// acessando a variável ola do módulo A
console.log(moduloA.ola)

// importando toda pasta c
const c = require('./pastaC')
console.log(c.ola2)

// Criando um servidor que escuta na porta 8080
const http = require('http') // importa http
http.createServer((req, res) => { // cria o servidor (requisição e resposta)
    res.write('Bom dia! Bem vindo ao servidor node') // resposta
    res.end() // finaliza 
}).listen(8080) // porta 8080