try { 
    //executa quando não há erros
    console.log(2);
    console.log(abc);
    console.log(3);
} catch(err){
    //executa quando há erros
    console.log('deu erro');
} finally {
    //executa sempre
    console.log('sempre');
}