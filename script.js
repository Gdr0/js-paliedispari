// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
let parola = prompt("Scrivi una parola");
function palindromo(parola) {
  parolaReversed = "";
  for (let i = parola.length - 1; i >= 0; i--) {
    parolaReversed += parola[i];
  }
  console.log(parola);
  console.log(parolaReversed);

  if (parola === parolaReversed) {
    console.log("Palindromo");
  } else {
    console.log("Non è un palindromo");
  }
  return;
}
const verPalindromo = palindromo(parola);
