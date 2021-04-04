function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    //form pegaria o form pela tag, .form 
    // pela classe, e #id pelo ID
    // form.onsubmit = funcion (evento) {
    //     evento.preventDefault(); 
    //     //evita que o evento funcione da forma que era pra funcionar
    //     alert('1');
    //     console.log('Foi enviado');
    // };
    // let contador = 1;
    function recebeEventoForm (evento){
        evento.preventDefault();
        // console.log(`Form não foi enviado ${contador}`);
        // contador++;
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        // console.log(nome.value , sobrenome.value , peso.value , altura.value );

        function criaPessoa(nome, sobrenome, peso, altura){
            return {
                nome,
                sobrenome,
                peso,
                altura
            };
        }
        pessoa = criaPessoa(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(pessoa);
        console.log(pessoas);

        resultado.innerHTML += `${pessoa.nome} ${pessoa.sobrenome}, ${pessoa.peso}, ${pessoa.altura}<br>`;

    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();