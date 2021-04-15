//função construtora -> objetos

//a função construtora precisa sempre começar com
//letra maiúscula

function Pessoa (nome, sobrenome){

  //variável privada
  const ID = 0213;

  //só pode ser acessada dentro do objeto
  const metodoInterno = function(){
   console.log('interno'); 
  }

  //atributos e métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log('sou um metodo');
  };
}

const p1 = new Pessoa('luiz', 'otavio');
const p2 = new Pessoa('joao', 'silva');

p1.metodo();
//a palavra new cria um novo objeto vazio
//e faz o this apontar pro objeto vazio
//e retorna para a const criada