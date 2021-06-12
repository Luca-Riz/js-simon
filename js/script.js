// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//*=================================================================================


// faccio un array con 5 numeri random
var randomNumber = [];

while(randomNumber.length<5){
    var valore = Math.floor(Math.random()*100 +1);
    if(randomNumber.includes(valore) == false){
        randomNumber.push(valore);
    }
}
console.log(randomNumber);

// mostro il contenuto dell'array con un alert
var conf = alert('memorizza questi numeri '+ randomNumber);
var partenza = 3; //!da mettere 30
    var countdownTimer = setInterval(countdown, 1000);  

function valoriIns(){
    
    // finito il tempo chiedo 5 prompt per riempire variabile "inseriti"    
    var inseriti = [];
    while(inseriti.length<5){
        var valore = parseInt(prompt('Inserisci un numero di quelli che hai visto prima'));
        if(inseriti.includes(valore) != true){
            inseriti.push(valore);

            // confronto i due array e dico quanti sono stati indovinati e quali
            var corretti = [];
 
            for(var i=0; i<5; i++){
            
                if(randomNumber.includes(inseriti[i]) == true){
                    corretti.push(inseriti[i]);
                }
            }

        } else {
            alert ('numero già inserito');
        }
    }//Output in base al punteggio realizzato
    if(corretti.length<5 && corretti.length>1){
        document.getElementById('punteggio').innerHTML = 'Hai indovinato '+ corretti.length + ' numeri';
        document.getElementById('indovinati').innerHTML = 'I numeri corretti sono: '+ corretti;
    } else if(corretti.length == 5){
        document.getElementById('indovinati').innerHTML = 'Complimenti, hai vinto, hai indovinato tutti e 5 i numeri!!! I numeri erano: '+ corretti;
    } else if(corretti.length == 1){
        document.getElementById('indovinati').innerHTML = 'Hai indovinato un solo numero, il '+ corretti;
    } else {
        document.getElementById('indovinati').innerHTML = 'Mi dispiace, non hai indovinato nessun numero';
    }
}


//*=================funzioni========================
function countdown(){
    if(partenza === 0){
        clearInterval(countdownTimer); //fine setInterval
        valoriIns();       
    } else {
        document.getElementById('countdown').innerHTML = partenza;
        partenza--;
    }
}

