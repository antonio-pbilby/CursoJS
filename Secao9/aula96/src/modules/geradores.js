const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, upper, lower, nums, symb) {
  if (!(qtd >= 0)) return;
  if (!upper && !lower && !nums && !symb) return;
  const senhaArray = [];
  qtd = Number(qtd);
  let loop = rand(rand(0, 4));
  let qtdGerada = 0;
  while (qtdGerada < qtd) {
    switch (loop) {
      case 0:
        if (upper) {
          senhaArray.push(geraMaiuscula());
          qtdGerada++;
          break;
        }
      case 1:
        if (lower) {
          senhaArray.push(geraMinuscula());
          qtdGerada++;
          break;
        }
      case 2:
        if (nums) {
          senhaArray.push(geraNumero());
          qtdGerada++;
          break;
        }
      case 3:
        if (symb) {
          senhaArray.push(geraSimbolo());
          qtdGerada++;
          break;
        }
    }
    loop = rand(0, 4);
  }

  return senhaArray.join("");
}
