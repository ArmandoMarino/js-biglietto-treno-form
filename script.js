console.log("JS OK");

// TRACCIA
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare
// il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: 
// usando esclusivamente due input e un bottone (non stilizzati), realizziamo
// le specifiche scritte sopra.
// La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo 
// un form in pagina in cui l’utente potrà inserire i dati e visualizzare 
// il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
// (il prezzo dovrà essere formattato con massimo due decimali, 
// per indicare i centesimi sul prezzo).





// 1 PRENDO I BOTTONI E L'IMPUT

const inputFname = document.getElementById("fname");
console.log(inputFname);

const inputUserKm = document.getElementById("userkm");
console.log(inputUserKm);

const inputUserAge = document.getElementById("userage");
console.log(inputUserAge);

const buttonGenerate = document.getElementById("generate");
console.log(buttonGenerate);

const buttonReset = document.getElementById("reset");
console.log(buttonReset);

// CALCOLO PREZZO 
const basePrice = inputFname * 0.21;

let finalPrice = basePrice;

// FLAG
let discount = null;

if(inputUserAge >= 65){
    finalPrice *= 0.6;
    discount = "40%"
} else if (inputUserAge < 18){
    finalPrice *= 0.8;
    discount = "20%"
}