/*Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. 

const firstNumber = prompt("Inserisci il primo numero");
const secondNumber = prompt("Inserisci il secondo numero");

if (firstNumber > secondNumber) {
    console.log("il numero maggiore è il primo");
} else if (firstNumber < secondNumber) {
    console.log("il numero maggiore è il secondo");
} else {
    console.log("I numeri sono uguali");
}
*/

//Soluzione con ciclo while

let i = 0;
let list = []

while (i < 2) {
    const number = prompt("Inserisci un numero");
    list.push(number)
    i++


    
    console.log(list)
}

if (list[0] > list[1]) {
    console.log("il numero maggiore è il primo");
} else if (list[0] < list[1]) {
    console.log("il numero maggiore è il secondo");
} else {
    console.log("I numeri sono uguali");
}