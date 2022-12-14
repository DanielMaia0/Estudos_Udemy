// Concatenando Arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//const a3 = a1.concat(a2, [7, 8, 9], 'Danielzinho'); <= usando .concat
const a3 = [...a1, 'Danielzinho', ...a2, ...[7, 8, 9]]; // usando Spread
console.log(a3);