// IIFE - Immediately invoked function expression
(function(idade, peso, altura){
    const sobrenome = 'Maia';
    function crianome(nome) {
        return nome + ' ' + sobrenome;
        
    }

    function falaNome() {
        console.log(crianome('Daniel'));
    }

    falaNome()
    console.log(idade, peso, altura)
})(31, 95, 1.63);