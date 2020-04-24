// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
// FUNÇÃO INVOCADA IMEDIATAMENTE.



(function() {
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente!')
}) ()


// Não executa se colocado antes da função IIFE
function verificar () {
    console.log('verificando IIFE')
}
verificar()