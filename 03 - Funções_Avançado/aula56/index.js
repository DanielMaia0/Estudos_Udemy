function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        get nomecompleto() {
            return `${this.nome} ${this.sobrenome}`; 
        },

        //Setter

        set nomecompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        
        fala: function(assunto) {
            return `${this.nome} está ${assunto}`; 
        },
        
        altura: a,
        peso: p,
        
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Daniel', 'Maia', 1.63, 95);
p1.nomecompleto = 'Julio Maia';
console.log(p1.fala('falando sobre JS'));
console.log(p1.imc);
console.log(p1.nomecompleto);