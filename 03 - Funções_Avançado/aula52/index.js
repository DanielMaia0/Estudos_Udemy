const nome = 'Daniel';

function falanome() {
    console.log(nome);
}

function usafalanome() {
    const nome = 'Maia';
    falanome();
}
usafalanome()