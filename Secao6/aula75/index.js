const objA = {
  chaveA: "A",
  nome: "A",
  // __proto__: Object.prototype
};

const objB = {
  chaveB: "B",
  nome: "A",
  // __proto__: objA
};

const objC = {
  chaveC: "C",
  nome: "A",
  // __proto__: objA
};

Object.setPrototypeOf(objC, objB);
Object.setPrototypeOf(objB, objA);

console.log(objB.__proto__);
console.log(objC.__proto__);
console.log(objB.chaveA);
console.log(objC.chaveB);

console.log("a", objA.nome);
console.log("b", objB.nome);
console.log("c", objC.nome);
