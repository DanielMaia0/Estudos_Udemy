// Declaração de função (function hoisting)
falaoi()
function falaoi() {
    console.log('Oie');
}

// First-Class objects (Objetis de primeira classe)
const souUmDado = function() {
    console.log('Sou um dado.');
}
//souUmDado();

function executaFuncao(funcao) {
    console.log('vou executar uma função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function!')
}
funcaoArrow()

//Dentro de um objeto posso ter uma função

const obj = {
    falar() {
        console.log('estou falando dentro de um objeto')
    }
}
obj.falar();