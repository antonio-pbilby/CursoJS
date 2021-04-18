const objA = {
  chaveA: "A",
  // __proto__: Object.prototype
};

const objB = {
  chaveB: "B",
  // __proto__: objA
};

const objC = {
  chaveC: "C",
  // __proto__: objA
};

Object.setPrototypeOf(objC, objB);
Object.setPrototypeOf(objB, objA);

console.log(objB.__proto__);
console.log(objC.__proto__);
console.log(objB.chaveA);
console.log(objC.chaveB);
