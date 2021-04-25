//métodos estáticos

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //Método de instância
  aumentarVolume() {
    this.volume += 2;
  }

  /**Diminui o volume da tv*/
  diminuirVolume() {
    this.volume -= 2;
  }

  //Método estático
  static trocaPilha() {
    console.log("ok vou trocar");
  }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

/*teste
controle1.trocaPilha();
TypeError: controle1.trocaPilha is not a function*/

ControleRemoto.trocaPilha();

//ex
console.log(Math.random());
/*isso é um método estático, pois não é
inicializada nenhuma instância de math
basta chamar pelo nome da classe*/

/*OBS
métodos estáticos não tem acessos a atributos
de cada instância */
