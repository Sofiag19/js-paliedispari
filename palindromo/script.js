// Una funzione per capire se la parola è palindroma

// devo permettere all'utente di inserire una parola
var word = prompt("Inserisci una parola per scoprire se è palindroma");

// uniformare i caratteri
var wordLow = word.toLowerCase();

var palindroma = false;
var j = 0;
var k = wordLow.length - 1;

while ((j < wordLow.length) && (wordLow[j] === wordLow[k])) {
  console.log("posizione sx-dx " + wordLow[j]);
  console.log("posizione dx-sx " + wordLow[k]);

  if (wordLow[j] !== wordLow[k]) {
    console.log("lettere diverse");
    palindroma = false;
  } else {
    console.log("lettere uguali");
    palindroma = true;
  }
  j++, k--;
}
console.log(palindroma);

// while (j < wordLow.length && wordLow[j] === wordLow[k]) {
//   console.log("posizione sx-dx " + wordLow[j]);
//   console.log("posizione dx-sx " + wordLow[k]);
//   palindroma = true;
//   j++, k--;
// }
//
// console.log(palindroma);

// if (palindroma = true) {
//   console.log("parola palindroma");
//   } else if (palindroma = false){
//       console.log("non palindroma");
//     }

// console.log(palindroma);

// var wordStr = "";

// for (var i = 0; i < wordLow.length; i++) {
  //   wordStr += wordLow[i];
  //   // console.log(wordStr);
  //   wordStr = wordLow[i] + wordStr;
  // }
  // console.log(wordStr);
// for (j = 0, k = wordLow.length - 1; j < wordLow.length ; j++, k-- ) {
//   console.log("posizione sx-dx " + wordLow[j]);
//   console.log("posizione dx-sx " + wordLow[k]);
//
//   if (wordLow[j] === wordLow[k]) {
//     console.log("parola palindroma" + wordLow[j] + wordLow[k]);
//     palindroma = true;
//   } else {
//     palindroma = false;
//     console.log("non palindroma");
//   }
// }












// devo eliminare spazi e caratteri speciali (?????)

// devo convertire la parola in un array, ogni carattere diventa un elemento
// var wordArray = [];
// var wordStr = "";
// for (var i = 0; i < wordLow.length; i++) {
//   // wordArray.push(wordLow[i]);
//   wordStr += wordLow[i];
//   wordStr = wordLow[i] + wordStr;
//   console.log(wordLow[i]);

// }
// // console.log(wordArray);
// console.log(wordStr);


// devo ciclare l'array confrontando la prima parola con l'ultima...la seconda con la penultima e così via

// var palindroma = false;

// for (j = 0, k = wordArray.length - 1; j < wordArray.length ; j++, k-- ) {
//   console.log("posizione sx-dx" + wordArray[j]);
//   console.log("posizione dx-sx" + wordArray[k]);


//   if (wordArray[j] === wordArray[k]) {
    // console.log("parola palindroma");
  //   console.log(wordArray[j] ,wordArray[k]);

  //   palindroma = true;
  // } else {
  //   palindroma = false;
    // console.log("non palindroma");
//   }
// }
// console.log(palindroma);



// controllo la prima e l'ultima lettera finchè sono identiche se arrivo alla fine e sono identiche allora è true

// proviamo invertendo l'array
/*var wordArrayDupl = wordArray.slice(0);
var wordArrayRev = wordArray.reverse();
console.log(wordArrayRev);


var palindroma = false;
for (var i = 0; i < wordArray.length; i++)
  if (wordArray[i] == wordArrayRev[i]){
    palindroma = true;
  } else {
    palindroma = false;
  }
  console.log(palindroma);*/

  // if (palindroma = true) {
  //   return console.log("é palindroma");
  // } else {
  //   return console.log("non è palindroma");
  // }
