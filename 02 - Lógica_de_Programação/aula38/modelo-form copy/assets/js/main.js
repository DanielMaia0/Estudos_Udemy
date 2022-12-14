const paragrafos = document.querySelector('#para');
const ps = paragrafos.querySelectorAll('p');

const estilos = getComputedStyle(document.body);
const background = estilos.backgroundColor;
console.log(background);

for (let p of ps) {
    p.style.backgroundColor = background;
    p.style.color = '#FFFFFF';
}