// defineProperty
// define Properties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque;

    /*
    Object.defineProperty(this, 'estoque', {
        enumerable: false, // Mostra a chave
        value: estoque, // Valor
        writable: true, // Permite alterar o valor
        configurable: true // Permite configurar ou apagar a chave
    });

    */


    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true,
            configurable: true 
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: true 
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true 
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);