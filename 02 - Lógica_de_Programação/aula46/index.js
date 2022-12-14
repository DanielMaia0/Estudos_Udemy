function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pe-BR', {
        hour12: false
    })
}

const time = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(() => {
   clearInterval(time); 
}, 10000);
