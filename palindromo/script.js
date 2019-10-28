// Una funzione per capire se la parola è palindroma


// devo permettere all'utente di inserire una parola
var word = prompt("Inserisci una parola per scoprire se è palindroma");

// uniformare i caratteri
var wordLow = word.toLowerCase();

// devo eliminare spazi e caratteri speciali (?????)

// devo convertire la parola in un array, ogni carattere diventa un elemento
var wordArray = [];
for (var i = 0; i < wordLow.length; i++) {
  wordArray.push(wordLow[i]);
}
console.log(wordArray);

// devo ciclare l'array confrontando la prima parola con l'ultima...la seconda con la penultima e così via
var palindroma = false;
for (j = 0 , k = wordArray.length - 1; j < wordArray.length ; j++, k-- ) {
  if (wordArray[j] === wordArray[k]) {
    console.log("parola palindroma");
    // palindroma = true;
  }else {
    // palindroma = false;
    console.log("non palindroma");
  }
}

  // if (palindroma = true) {
  // console.log("parola palindroma");
  // } else {
  //   console.log("non palindroma");
  // }