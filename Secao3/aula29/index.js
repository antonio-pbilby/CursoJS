const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'terça';
        break;
    case 3:
        diaSemanaTexto = 'quarta';
        break;
    case 4:
        diaSemanaTexto = 'quinta';
        break;
    case 5:
        diaSemanaTexto = 'sexta';
        break;
    case 6:
        diaSemanaTexto = 'sábado';
        break;
    default:
        diaSemanaTexto = '';
}

console.log(diaSemanaTexto);