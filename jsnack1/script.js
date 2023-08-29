/*Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const firstNumber = prompt("Inserisci il primo numero");
const secondNumber = prompt("Inserisci il secondo numero");

if (firstNumber > secondNumber) {
    console.log("il numero maggiore è il primo");
} else if (firstNumber < secondNumber) {
    console.log("il numero maggiore è il secondo");
} else {
    console.log("I numeri sono uguali");
}