/*const pessoa1 = {
    nome: 'Daniel',
    sobrenome: 'Maia',
    idade: 31
};

const pessoa2 = {
    nome: 'Julio',
    sobrenome: 'Maia',
    idade: 25
};
*/

function criapessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}

const pessoa1 = criapessoa('Daniel', 'Maia', 31);
const pessoa2 = criapessoa('Julio', 'Maia', 25);
const pessoa3 = criapessoa('Tais', 'Ribeiro', 26);

console.log(pessoa2.nome, pessoa2.idade)