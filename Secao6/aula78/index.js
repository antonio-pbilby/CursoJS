function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  //validação matemática
  const cpfArray = Array.from(this.cpfLimpo);

  const dig1 = this.geraDigito(cpfArray.slice(0, -2));
  if (dig1 !== Number(cpfArray[cpfArray.length - 2])) return false;

  const dig2 = this.geraDigito(cpfArray.slice(0, -1));
  if (dig2 !== Number(cpfArray[cpfArray.length - 1])) return false;

  return true;
};

ValidaCPF.prototype.isSequencia = function () {
  return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

ValidaCPF.prototype.geraDigito = function (cpfParcial) {
  const soma = cpfParcial.reduce((ac, valor, i) => {
    ac += Number(valor) * (cpfParcial.length - i + 1);
    return ac;
  }, 0);
  const dig = 11 - (soma % 11) > 9 ? 0 : 11 - (soma % 11);
  return dig;
};

const cpf = new ValidaCPF("705.484.450-52");
const cpf2 = new ValidaCPF("111.111.111-11");
console.log(cpf.valida());
console.log(cpf2.valida());
