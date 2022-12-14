/*
function ePaisagem(x, y) {
    if (x > y) {
        return false;
    } else {
        return true;
    }
}
console.log(ePaisagem(1600, 1800)); */

function ePaisage(largura, altura) {
    return largura > altura; // ? true : false;
}
console.log(ePaisage(1200, 720))

console.log('-----------------------------------')

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1200, 720))
