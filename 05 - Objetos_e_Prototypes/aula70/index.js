/*const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Maia',
    idade: 31,
};

const chave = 'idade';

console.log(pessoa.nome);
console.log(pessoa['sobrenome']);
console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = 'Julio';
pessoa1.sobrenome = 'Maia';
pessoa1.idade = 25;

console.log(pessoa1.nome);
console.log(pessoa1['sobrenome']);
console.log(pessoa1[chave]);

const pessoa3 = new Object();
pessoa3.nome = 'Daniel';
pessoa3.sobrenome = 'Maia';
pessoa3.idade = 31;
pessoa3.falarNome = () => (`${this.nome} está falando o seu nome!`);
pessoa3.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa3.falarNome()); */


function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
};

const p1 = criaPessoa('Daniel', 'Maia');
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p = new Pessoa('Daniel', 'Maia');