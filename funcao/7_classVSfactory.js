class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
    // Não é necessário utilizar a palavra reservada function, pois está dentro do escopo da class.
    falar() {
        // Necessário utilizar o this
        console.log(`Meu nome é: ${this.nome}`)
    }
}

const pessoa = new Pessoa('Alex');
pessoa.falar()

// Contrutora. Podemos usar function ou arrow function

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é: ${nome}`)
    }
}

const pessoa2 = criarPessoa('Pedro')
pessoa2.falar()

