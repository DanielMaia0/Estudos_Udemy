const nome = 'Daniel';
let i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++
}

console.log('-------------------------------')

function random (min, max) {
    const r = Math.random() * (max -min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(1, 50);

while (rand !== 10) {
    rand = random(1, 50);
    console.log(rand);
}

console.log('-------------------------')

do {
    rand = random(1, 50);
    console.log(rand);
} while (rand !== 10);