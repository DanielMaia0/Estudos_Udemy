class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // Método de instâcia
    aumentarVolume() {
        this.volume += 2;
    }
    // Método de instância
    diminuiVolume() {
        this.volume -= 2;
    }
    // Método estático - Não tem acesso aos dados da instância!
    static trocaPilha() {
        console.log('Trocando a pilha...')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuiVolume();
ControleRemoto.trocaPilha();
console.log(controle1);