/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let sum = 0;

for (let i = 1; i <= 10; i++){
    
    const numero = Number(prompt("inserisci numero" + i));
    sum += numero;
    console.log("La somma di tutti i numeri inseriti è " + sum);
}

