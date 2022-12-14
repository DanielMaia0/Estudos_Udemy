/*
&& - false && true - false "O valor mesmo"
|| - true || false - vai retornar "O valor verdadeiro" 

FALSY
*false
0
"" '' ``
null / undefined
NaN

*/

/* function falaOi () {
     return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Daniel' || true)*/

/*const corUsuario = 0;
//const corPadrao = 'red';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao)*/

const a = 0;
const b = null;
const c = 'false'; // Esse aqui é true!
const d = false;
const e = NaN;

console.log(a || b || c || d || e)

