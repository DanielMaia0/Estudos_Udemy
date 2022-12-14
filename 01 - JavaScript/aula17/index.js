/*function saudacao(nome) {
    return `Bom dia ${nome}`;
}

const vari = saudacao('Daniel')
console.log(vari)*/

function soma (x,y) {
    const res = x + y;
    return res;
}

//console.log(soma(2,2));
//console.log(soma(3,1));
//console.log(soma(5,10));

const raiz = (n) => { // Arrow function
    return Math.sqrt(n) //  pode usar também (n ** 0.5)
};

console.log(raiz(3))