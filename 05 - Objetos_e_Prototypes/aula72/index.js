// defineProperty - Getter e Setter
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                console.log('Valor Inválido!');
                return;
            }

            estoquePrivado = valor;
        }

    });

}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 35;
console.log(p1.estoque);