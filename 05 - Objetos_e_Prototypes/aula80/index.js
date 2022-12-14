const pessoas = [
    { id: 3, nome: 'Daniel'},
    { id: 2, nome: 'Jujuba'},
    { id: 1, nome: 'Tais'},
];
/*
const novasPessoas = {};
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}
*/
const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}


console.log(novasPessoas);