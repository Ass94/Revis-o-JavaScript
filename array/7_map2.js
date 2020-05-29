// Criando um Json:
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// Retornará um array apenas com os nomes
// Serão necessários dois maps
// 1. Chamar JSON.parte() para converter o Json em Object
// 2. Array com os preços

const paraObject = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObject).map(apenasPreco)
console.log(resultado)

const registros = [
    '{"cnpj": "12345678000199", "nomePagador": "Luiz", "vlrNominal": 60.00}',
    '{"cnpj": "12345678000128", "nomePagador": "Carlos", "vlrNominal": 70.00}',
    '{"cnpj": "12345678000125", "nomePagador": "Lucas", "vlrNominal": 80.00}',
    '{"cnpj": "12345678000176", "nomePagador": "Marcos", "vlrNominal": 90.00}',
]

// Receberá o Json como parâmetro e retornará um objeto.
const jsonToObject = json => JSON.parse(json)

const beneficiario = boleto => boleto.cnpj 

const result = registros.map(jsonToObject).map(beneficiario)
console.log(result)