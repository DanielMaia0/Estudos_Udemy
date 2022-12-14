/*
const frutas = ['Maçã', 'Uva', 'Banana'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let i in frutas) {
    console.log(frutas[i]);
}
*/
const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Maia',
    idade: 31
}

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}