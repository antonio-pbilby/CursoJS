//função que se chama

//crássico

function revursiva (max) {
  if (max > 10) return;
  console.log(max);
  max++;
  revursiva(max);
}

revursiva(-10);