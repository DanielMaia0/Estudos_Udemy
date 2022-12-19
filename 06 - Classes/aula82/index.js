class DisposivitoEletronido {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado.`);
            return;
        }

        this.ligado = true;
        console.log(`${this.nome} ligado.`);
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} está desligado.`);
            return;
        }

        this.ligado = false;
        console.log(`${this.nome} desligado.`);
    }

}

class Telemovel extends DisposivitoEletronido {
    constructor (nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

const s1 = new Telemovel('Celular', 'Azul');
s1.ligar();
s1.ligar();
console.log(s1);