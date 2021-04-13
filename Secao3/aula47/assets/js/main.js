function getTimeFromSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timerUpdt;
function iniciaRelogio(){
    timerUpdt = setInterval(function (){
        segundos++;
        timer.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

console.log(getTimeFromSeconds(10));

iniciar.addEventListener('click', function(event){
    clearInterval(timerUpdt);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event){
    clearInterval(timerUpdt);
});

zerar.addEventListener('click', function(event){
    clearInterval(timerUpdt);
    timer.innerHTML = getTimeFromSeconds(0);
    segundos = 0;
});