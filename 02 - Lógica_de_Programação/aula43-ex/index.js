function fizzbuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero %3 ===0 && numero %5 === 0) return 'FizzBuzz';
    if (numero %3 ===0 ) return 'Fizz';
    if (numero %5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzbuzz(i))
}


/*
for (let c = 0; c <= 100; c++) {
    if (c %3 === 0 && c %5 === 0) {
        console.log('FizzBuzz');
    } else if (c %3 === 0) {
        console.log('Fizz');
    } else if (c %5 === 0) {
        console.log('Buzz');
    } else {
        console.log(c);
    }
}
*/