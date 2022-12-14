/*
try {
// É executado quando não há erros.
console.log('Abri o arquivo.');
console.log('Manipulei o arquivo e gereu erro.');
console.log('Fechei o arquivo.');

try {
    console.log(a);
} catch {
    console.log('Deu erro.');
} finally {
    console.log('Tambem sou executado.')
}


} catch (e){
// É executado quando há erros.
console.log('Tratando o erro.');
} finally {
// Sempre é executado.
console.log('Eu sempre sou executado.')
}
*/

function retornaHora(data) {
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instâcia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);

} catch {
    // Tratar Erro
} finally {
    console.log('Tenha um bom dia!')
}




