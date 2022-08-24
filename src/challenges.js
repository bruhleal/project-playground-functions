// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(word) {
  // seu código aqui
  return word.split(" ");
}

// Desafio 4
function concatName(meuArray) {
  // seu código aqui
  return meuArray.[meuArray.length-1] + ', ' + meuArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let maior = numbers[0];
  let count = 0;
  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] > maior) {
      maior = numbers[i];
    }
  }
  for(let j=0; j <= numbers.length; j+=1 ){
    if(numbers[j] === maior){
      count+=1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let positionCat1 = Math.abs(cat1 - mouse);
  let positionCat2 = Math.abs(cat2 - mouse);
  if(positionCat1 < positionCat2){
    return 'cat1';
  } else if (positionCat2 <  positionCat1) {
    return 'cat2';
  } else if (positionCat1 === positionCat2){
    return 'os gatos trombam e o rato foge';
  }
}



// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
