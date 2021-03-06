export default class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      value: cpfEnviado.replace(/\D+/g, ""),
      writable: false,
      enumerable: false,
      configurable: false,
    });
  }

  eSequencia() {
    return (
      this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    );
  }

  geraNovoCpf() {
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.geraDigito(cpfParcial);
    const digito2 = this.geraDigito(cpfParcial + digito1);
    this.novoCPF = cpfParcial + digito1 + digito2;
  }

  static geraDigito(cpfParcial) {
    let total = 0;
    let reverso = cpfParcial.length + 1;
    for (let stringNumerica of cpfParcial) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.eSequencia()) return false;
    this.geraNovoCpf();
    console.log(this.novoCPF);

    return this.novoCPF === this.cpfLimpo;
  }
}
