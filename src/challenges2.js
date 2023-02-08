/* eslint-disable complexity */
// Desafio 11
function generatePhoneNumber(arrayNumber) {
  // seu código aqui
  if (arrayNumber.length !== 11){
    return 'Array com tamanho incorreto.';
  }
  else if (arrayNumber.length < 0 || arrayNumber.length > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  
}

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck (lineA, lineB, lineC) {
  // seu código aqui
  let lineBC = Math.abs(lineB - lineC);
  let lineAC = Math.abs(lineA - lineC);
  let lineAB = Math.abs(lineA - lineB);

  if (lineA < lineB + lineC && lineA > lineBC) {
    return true;
  }
  else if (lineB < lineA + lineC && lineB > lineAC) {
    return true;
  } 
  else if (lineC < lineA + lineB && lineC > lineAB) {
    return true;
}
  return false;
}

// Desafio 13
function hydrate(quantidade) {
  // seu código aqui
  let quantidadeRecebida = quantidade.match(/\d+/g);
  let auxiliar = 0;

  for (let index of quantidadeRecebida) {
    auxiliar += Number(index);
  }
  if (auxiliar === 1) {
    result = `${Number(auxiliar)} copo de água`;
    return result;
  }
  return result = `${Number(auxiliar)} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
