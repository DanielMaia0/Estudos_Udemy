/*
const data = new Date();
console.log(data.toString());
*/

function zero(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zero (data.getDate());
    const mes = zero (data.getMonth() + 1);
    const ano = zero (data.getFullYear());
    const hora = zero (data.getHours());
    const min = zero (data.getMinutes());
    const seg = zero (data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil); 