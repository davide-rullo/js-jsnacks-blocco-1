/*Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const oddNumbers = [];

for (let i = 1; i <= 6; i++){
    
    const numero = Number(prompt("inserisci numero " + i));
    
    if (numero %2 !== 0) {
        oddNumbers.push(numero);
        console.log(oddNumbers)
    }
  
}

