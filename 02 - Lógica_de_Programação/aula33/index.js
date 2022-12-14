const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Maia',
    //idade: 31,
    endereço: {
        rua: 'Atenor Rodrigues Lima',
        numero: 17,
        bairro: 'URBIS3'
    }

}
/*Atribuição normal
const nome = pessoa.nome;
*/

// Atrubuição via desestruturação
const {nome: n, sobrenome, idade = ''} = pessoa;
console.log('Indivíduo: ',n, sobrenome, idade);
const { endereço: {rua, numero} } = pessoa;
console.log('Endereço: ',rua, numero);