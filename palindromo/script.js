// Una funzione per capire se la parola è palindroma


// devo permettere all'utente di inserire una parola

var word = prompt("Inserisci una parola per scoprire se è palindroma");
var wordLow = word.toLowerCase();
// devo convertire la parola in un array, ogni carattere diventa un elemento
var wordArray = [];
for (var i = 0; i < wordLow.length; i++) {
  wordArray.push(wordLow[i]);
  console.log(wordArray);
}

// devo eliminare spazi e caratteri speciali, ed uniformare le lettere (o tutto maiuscolo o tutto minuscolo)
// devo ciclare l'array confrontando la prima parola con l'ultima...la seconda con la penultima e così via
