function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

// function funcaoDoInterval() {
//     console.log(mostraHora());
// }

//repete a função a cada 1seg 
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000); //em ms

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log('Olá mundo');
}, 5000)