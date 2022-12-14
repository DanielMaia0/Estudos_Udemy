function retornafuncao() {
    const nome = 'Daniel';
    return function () {
        return nome;
    };
}

const funcao = retornafuncao();
console.dir(funcao());