// Una funzione per capire se la parola è palindroma

// devo permettere all'utente di inserire una parola
var word = prompt("Inserisci una parola per scoprire se è palindroma");

// uniformare i caratteri
var wordLow = word.toLowerCase();

palindromia(wordLow);

function palindromia(wordInput) {
  // parola invertita
  var wordLowInv = "";
  for (var i = wordInput.length - 1; i >= 0; i--) {
    wordLowInv += wordInput[i];
  }
  return console.log(wordLowInv);

  if (wordLowInv === wordInput) {
    return console.log("palindroma");
  } else {
    return console.log("non palindroma");
  }
}
