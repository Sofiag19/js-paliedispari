// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// permettere all'utente di scegliere pari o dispari - un possibile controllo potrebbe essere quello che se l'utente non sceglie o pari e dispari gli ritorna di nuovo la schermata di prompt finchè non sceglie correttamente
var paDiUtente = prompt("scegli tra pari e dispari");

// permettere all'utente di scegliere un numero da 1 a 5 - inserire un controllo di min e max, altrimenti ricompare la schermata di prompt anche nel qualcaso scelga una parola
var numUtente = parseInt(prompt("Scegli un numero da 1 a 5"));

// generare un numero casuale da 1 a 5 con una funzione
var numPc = numRandom (1,5);
  function numRandom(min, max) {
    return Math.floor((Math.random() * max) + min );
  }
console.log(numPc);

// creare una funzione che ci permette di sommare i due numeri ed impostare il return per capire se la somma è pari o dispari