// ? :

const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 1000) {
//     console.log('VIP');
// } else {
//     console.log('normal');
// }

const nivelUsuario = pontuacaoUsuario >=1000 ? 'VIP' : 'normal';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';