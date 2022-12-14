/*
function funcao() {
    console.log(arguments[0]);
}
funcao('valor')

function funcao1() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao1(1, 2, 3, 4, 5, 6, 7);


function funcao(a, b, c, d, e, f) {
    console.log(a, b , c , d , e , f)

}
funcao(1, 2, 3)


function funcao(a = 0, b = 0) {
    console.log(a + b);
}
funcao(2)

function funcao ({ nome, sobrenome, idade, endereco}) {
    console.log(nome, sobrenome, idade, endereco);
}
let obj = { nome: 'Daniel', sobrenome: 'Maia', idade: 32, endereco: 'rua joaninha da silva'};
funcao(obj);
*/

function funcao ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao(['Daniel', 'Maia', 32]);

console.log('--------------------------')

function conta(operador, acumulador, ...numeros) {
   for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -+ numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
   }

   console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);