// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// input utente 
var eta = parseInt(prompt('Quanti hanni hai ?'));
var km = parseFloat(prompt('Quanti chilometri devi percorrere ?'));


// fine input utente 
// calcolo prezzo della corsa in base ai kilometri 
var prezzoCorsa = km * 0.21
console.log(prezzoCorsa);

if (isNaN(prezzoCorsa)){
    alert('hai inserito delle lettere ripeti l\'operazione')
} else {
//  sconto solo su condizione
    if (eta > 65) {
        prezzoCorsa *= 0.6;
    } else if (eta < 18) {
        prezzoCorsa *= 0.8;
    }
// fine sconto 
// output del prezzo della corsa 
    document.getElementById('price').innerHTML = 'il prezzo da pagare è ' + prezzoCorsa.toFixed(2) + ' €';
}




