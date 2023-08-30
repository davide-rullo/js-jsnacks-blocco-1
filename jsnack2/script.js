/*Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("Inserisci la prima parola");
const secondWord = prompt("Inserisci la seconda parola");

if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
} else if (firstWord.length < secondWord.length) {
    console.log(firstWord, secondWord);
} else {
    console.log(firstWord, secondWord);
}
*/

//Soluzione con while

let i = 0;
let list = []

while (i < 2) {
    const parola = prompt("Inserisci una parola");
    list.push(parola)
    i++
}

if (list[0].length > list[1].length) {
    console.log(list[1], list[0]);
} else if (list[0].length < list[1].length) {
    console.log(list[0], list[1]);
} else {
    console.log(list[0], list[1]);
}