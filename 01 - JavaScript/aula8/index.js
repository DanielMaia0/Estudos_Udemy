const nome =  'Daniel';
const sobrenome = 'Maia';
const idade = 31;
const peso = 95;
const altura = 1.63;
let dataAtual = new Date();
let ano = dataAtual.getFullYear();
let anoNascimento = (ano - idade);
let imc = (peso / (altura * altura));
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, tem ${altura} de altura e seu IMC é ${imc}`)
console.log(`${nome + ' ' + sobrenome} nasceu em  ${anoNascimento}.`)