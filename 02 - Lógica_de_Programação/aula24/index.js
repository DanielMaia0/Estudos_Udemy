
const hora = 30;

if (hora >= 5 && hora < 12) {
    console.log('bom dia!');
} else if (hora >= 12 && hora < 18) {
    console.log('boa tarde');
} else if (hora >= 18 && hora < 23.59) {
    console.log('boa noite');
} else if (hora >= 0 && hora < 5){
    console.log('boa madrugada carai');
} else {
    console.log('hora inválida')
}