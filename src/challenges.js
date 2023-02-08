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
function fizzBuzz(numeros) {
  // seu código aqui
  let aux = [];
  for (let i=0;i<numeros.length;i+=1){
    if (numeros[i] % 3 === 0 && numeros[i] % 5 !==0){
      aux.push('fizz');
    } 
    else if (numeros[i] % 5 === 0 && numeros[i] % 3 !== 0) {
      aux.push ('buzz');
    }
    else if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0){
      aux.push ('fizzBuzz');
    }
    else {
      aux.push ('bug!');
    }
  }
  return aux;
}

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let auxiliar = phrase.split('');
  for (let index=0;index<auxiliar.length;index+=1){
    if (auxiliar[index] === 'a'){
      auxiliar[index] = '1';
    }
    else if (auxiliar[index] === 'e'){
      auxiliar[index] = '2';
    }
    else if (auxiliar[index] === 'i'){
      auxiliar[index] = '3';
    }
    else if (auxiliar[index] === 'o'){
      auxiliar[index] = '4';
    }
    else if (auxiliar[index] === 'u'){
      auxiliar[index] = '5';
    }
  }
  return auxiliar.join('');
}

function decode(number) {
  // seu código aqui
  let auxiliar = number.split('');
  for (let index=0;index<auxiliar.length;index+=1){
    if (auxiliar[index] === '1'){
      auxiliar[index] = 'a';
    }
    else if (auxiliar[index] === '2'){
      auxiliar[index] = 'e';
    }
    else if (auxiliar[index] === '3'){
      auxiliar[index] = 'i';
    }
    else if (auxiliar[index] === '4'){
      auxiliar[index] = 'o';
    }
    else if (auxiliar[index] === '5'){
      auxiliar[index] = 'u';
    }
  }
  return auxiliar.join('');
}

// Desafio 10
function techList(nomeTech, nomePessoa) {
  // seu código aqui
  let listaTech = nomeTech.sort();
  let objetoTech = [];
    for (let i=0;i<listaTech.length;i+=1){
      objetoTech.push({tech: listaTech[i], name: nomePessoa});
    }
    if (listaTech.length === 0){
      return 'Vazio!';
    }
  return objetoTech;
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
