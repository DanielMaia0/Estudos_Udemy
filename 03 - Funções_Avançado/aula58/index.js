// Função costrutora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`${nome} chamando o método!`);
    }
}

const p1 = new Pessoa('Daniel', 'Maia');
const p2 = new Pessoa('Joãozinho', 'Da Silva');

p2.metodo();