/*
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const numeros = [b , c , a];
[a , b , c] = numeros;

console.log(a, b, c); */

const numeros = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90];
//const primeiroNumero = numeros[0];
// segundoNumero = numeros[1];
const [primeiroNumero, segundoNumero, terceiroNumero, ... resto] = numeros; //Desestruturação
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto)

// ... rest
// ... spread
// utilize espaço vazio para pular numeros no array.


//                     0          0          0
//                  0  1  2    0  1  2    0  1  2   
const numeross = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
//console.log(numeross[1][2])

const [lista1, lista2, lista3] = numeross;
console.log(lista2[2])

