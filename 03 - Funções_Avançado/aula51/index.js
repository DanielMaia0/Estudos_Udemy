/*
function soma (a, b) {
    return a + b;
}
soma(5, 2)

function soma2 (a, b) {
    console.log(a + b);
}
soma2(5, 3)

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Daniel', 'Maia');
const p2 = {
    nome: 'Daniel',
    sobrenome: 'Maia'
};

console.log(p1);
console.log(p2);
*/
function falafrase(comeco) {
    function falaresto(resto) {
        return comeco + ' ' + resto;
    }
    return falaresto;
}

const olamundo = falafrase('Olá');
console.log(olamundo('Mundo!'));
/*
function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}
*/



function criamultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criamultiplicador(2);
const triplica = criamultiplicador(3);
const quadriplica = criamultiplicador(4);


console.log(duplica(2), triplica(2), quadriplica(2));