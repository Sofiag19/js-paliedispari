// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// permettere all'utente di scegliere pari o dispari - un possibile controllo potrebbe essere quello che se l'utente non sceglie o pari e dispari gli ritorna di nuovo la schermata di prompt finchè non sceglie correttamente
var paDiUtente = prompt("scegli tra pari e dispari");
console.log(paDiUtente);


// permettere all'utente di scegliere un numero da 1 a 5 - inserire un controllo di min e max, altrimenti ricompare la schermata di prompt anche nel qualcaso scelga una parola
var numUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(numUtente);


// generare un numero casuale da 1 a 5 con una funzione
var numPc = numRandom (1,5);
console.log(numPc);

var vittoria = pariDispari(numUtente, numPc);

// funzioni
function numRandom(min, max) {
  return Math.floor((Math.random() * max) + min );
}
function pariDispari(num1,num2) {
  var somma = num1 + num2;
  if (somma % 2 === 0) {
    return console.log("vince il pari");
  } else {
    return console.log("vince il dispari");
  }
}
