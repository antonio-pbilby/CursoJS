//console.log(naoExisto);
/*
ReferenceError: naoExisto is not defined
    at Object.<anonymous> (e:\Cursos\CursoJS\Secao3\aula44\index.js:1:13)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/
try {
  //tenta executar o código, se retorna um erro, executa o catch
  console.log(naoExisto);
} catch (err) {
  console.log("naoExisto não existe.");
}

function soma(x, y) {
  if (
      typeof x !== "number" ||
      typeof y !== "number") {
    throw("x e y precisam ser números");
  }
  return x + y;
}

try {
    console.log(soma(1,'4a'));
} catch (err) {
    console.log(err);
}
