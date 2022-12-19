class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} ${this.sobrenome} está comendo.`)
    }

    beber() {
        console.log(`${this.nome} ${this.sobrenome} está bebendo.`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} ${this.sobrenome} está falando.`);
}

const p1 = new Pessoa('Daniel', 'Maia');
const p2 = new Pessoa('Jujuba', 'Aleatória');
console.log(p1);
p1.falar();