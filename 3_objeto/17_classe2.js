class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

// Quando não tiver nenhum parâmetro, não é necessário uso de ()
const filho = new Filho
filho.profissao = 'Engenheiro'
console.log(filho)