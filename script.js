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





// 1 PRENDO GLI OGGETTI DALLA PAGINA

// INPUT--------------------------------------

const inputFname = document.getElementById("fname");
console.log(inputFname);

const inputUserKm = document.getElementById("userkm");
console.log(inputUserKm);

const inputUserAge = document.getElementById("userage");
console.log(inputUserAge);

// BOTTONI --------------------------------------

const buttonGenerate = document.getElementById("generate");
console.log(buttonGenerate);

const buttonReset = document.getElementById("reset");
console.log(buttonReset);







// VARIABILE RANDOMICA
const random = Math.random();

// VARIABILI CARROZZA
const maxCarriage = 5;

// VARIABILI CODICE CP
const minCpcode = 10000;
const maxCpcode = 95000;

buttonGenerate.addEventListener('click', function (){


    
// OUTPUT-----------------------------------------

const nameOut = document.getElementById("name");
console.log(nameOut);

let ticketOut = document.getElementById("ticket");
console.log(ticketOut);

const carriage = document.getElementById("carriage");
console.log(carriage);

const cpcode = document.getElementById("cpcode");
console.log(cpcode);

const ticketOutPrice = document.getElementById ("ticketprice");
console.log(ticketOutPrice);

// CALCOLO PREZZO 
// inputUserKm.value =

const basePrice = inputUserKm * 0.21;

let finalPrice = basePrice;

let discount = null;
if(ticketOut = "Maggiorenne"){
    finalPrice *= 0.6;
    discount = "Biglietto con sconto del 40%"
} else if (ticketOut = "Minorenne"){
    finalPrice *= 0.8;
    discount = "Biglietto con sconto del 20%"
}

// RESULT
inputUserKm.value;

nameOut.innerText = inputFname.value;

ticketOut.innerText = discount;

carriage.innerText = Math.floor(random * maxCarriage)+1;

cpcode.innerText = Math.floor(random * maxCpcode)+ minCpcode;

ticketOutPrice.innerText = finalPrice;

});


