// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
 
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
