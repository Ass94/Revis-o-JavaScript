// As formas abaixo permitem que os que sejam vistos por outros módulos.
// Ou seja, as formas adotadas abaixo tornam as varíaveis do moduloA públicas, por exemplo
this.ola = 'Fala pessoal' // this torna a variável global
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até o próximo exemplo'