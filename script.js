// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// let parola = prompt("Scrivi una parola");
// function palindromo(parola) {
//   parolaReversed = "";
//   for (let i = parola.length - 1; i >= 0; i--) {
//     parolaReversed += parola[i];
//   }
//   console.log(parola);
//   console.log(parolaReversed);

//   if (parola === parolaReversed) {
//     console.log("Palindromo");
//   } else {
//     console.log("Non è un palindromo");
//   }
//   return;
// }
// const verPalindromo = palindromo(parola);
//
//
//
//
//
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const parDisp = prompt("Scegli tra pari e dispari");
const numUser = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(parDisp, numUser);
function numComputer() {
  return Math.floor(Math.random() * 5 + 1);
}
const randomComp = numComputer();
console.log(`Il numero del Computer è ${randomComp}`);
const somma = randomComp + numUser;
console.log(`La somma totale è ${somma}`);

function winner(somma, parDisp) {
  const win = "Hai Vinto!";
  const loss = "Hai Perso";
  if (parDisp === "pari" && somma % 2 === 0) {
    console.log(win);
  } else if (parDisp === "dispari" && somma % 2 === 1) {
    console.log(win);
  } else if (parDisp === "pari" && somma % 2 === 1) {
    console.log(loss);
  } else {
    console.log(loss);
  }
  return;
}
const result = winner(somma, parDisp);
