// Criando classe
class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = []
    }
    // Método que recebe um conjunto de elementos
    addLancamentos(...lancamentos) {
        // percorre o array adincionado os elementos l
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0;
        // Percorre o array lancamentos e adiciona a soma de cada elemento na variável valorConsolidado.
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        })
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salário', 4500);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())