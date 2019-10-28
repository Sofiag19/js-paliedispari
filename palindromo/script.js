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

/*var palindroma = false;

for (j = 0, k = wordArray.length - 1; j < wordArray.length ; j++, k-- ) {
  if (wordArray[j] === wordArray[k]) {
    // console.log("parola palindroma");
    console.log(wordArray[j] ,wordArray[k]);
    
    palindroma = true;
  } else {
    palindroma = false;
    // console.log("non palindroma");
  }
}
console.log(palindroma);


  if (palindroma = true) {
  console.log("parola palindroma");
  } else if (palindroma = false){
    console.log("non palindroma");
  }*/



// proviamo invertendo l'array
var wordArrayDupl = wordArray.slice(0);
var wordArrayRev = wordArray.reverse();
console.log(wordArrayRev);


var palindroma = false;
for (var i = 0; i < wordArray.length; i++)
  if (wordArray[i] == wordArrayRev[i]){
    palindroma = true;
  } else {
    palindroma = false;
  }
  console.log(palindroma);
  
  // if (palindroma = true) {
  //   return console.log("é palindroma");
  // } else {
  //   return console.log("non è palindroma");
  // }


