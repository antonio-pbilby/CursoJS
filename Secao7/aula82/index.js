class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " já ligado");
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " já desligado");
      return;
    }
    this.ligado = false;
  }
}

//Herança
//absurdamente mais simples que com função construtora ou fábrica
class Smartphone extends DispositivoEletronico {
  //sempre que se fala extends, o programa espera
  //que a função super(); seja chamada
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone("samsung", "preto", "galaxy s10");
console.log(s1);
s1.ligar();
s1.ligar();
