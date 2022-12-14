const data = new Date();
const diasem = data.getDay();

let diasemana = dia(diasem);

function dia(diasem) {
    let diasemana
    switch (diasem) {
        case 0:
           return diasemana = 'Domingo';
        case 1:
           return diasemana = 'Segunda';
        case 2:
           return diasemana = 'Terça';
        case 3:
           return diasemana = 'Quarta';
        case 4:
           return diasemana = 'Quinta';
        case 5:
           return diasemana = 'Sexta';
        case 6:
           return diasemana = 'Sábado'
        default:
           return diasemana = 'Invalido'
    }
}


/*
switch (diasem) {
    case 0:
        diasemana = 'Domingo';
        break;
    case 1:
        diasemana = 'Segunda';
        break;
    case 2:
        diasemana = 'Terça';
        break;
    case 3:
        diasemana = 'Quarta';
        break;
    case 4:
        diasemana = 'Quinta';
        break;
    case 5:
        diasemana = 'Sexta';
        break;
    case 6:
        diasemana = 'Sábado'
        break;
    default:
        diasemana = 'Invalido'
        break;
}
*/


/*
if (diasem === 0) {
    diasemana = 'Domingo';
} else if (diasem === 1) {
    diasemana = 'Segunda';
} else if (diasem === 2) {
    diasemana = 'Terça';
} else if (diasem === 3) {
    diasemana = 'Quarta';
} else if (diasem === 4) {
    diasemana = 'Quinta';
} else if (diasem === 5) {
    diasemana = 'Sexta';
} else if (diasem === 6) {
    diasemana = 'Sábado'
}
*/


console.log(diasem, diasemana);