// Construtora - molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
};

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

// Instância
const pessoa1 = new Pessoa('Daniel', 'M.'); // - Pessoa = função construtora
const pessoa2 = new Pessoa('Jujuba', 'M.'); // - Pessoa = funcão construtora
const data = new Date(); // - Data na função construtora
console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
