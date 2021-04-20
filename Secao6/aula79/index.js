//super classe
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log("Saldo insuficiente");
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`Ag/c.: ${this.agencia}/${this.conta}`);
  console.log(`Saldo R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11, 22, 10);
// conta1.depositar(11);
// conta1.depositar(9);
// conta1.sacar(30);
// conta1.sacar(1);

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (this.saldo + this.limite < valor) {
    console.log("Saldo insuficiente");
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);

//polimorfismo nesse caso é quando existem
//dois métodos com o mesmo nome, mas eles fazem
//coisas diferentes
//pois um dos métodos foi sobrescrito por um dos
//"filhos" da classe
