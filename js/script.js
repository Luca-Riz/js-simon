// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



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
var conf = confirm('memorizza questi numeri '+ randomNumber);

// quando schiaccio button parte un timer di 30 secondi
if(conf == true){
    var partenza = 3; //!da mettere 30
    var countdownTimer = setInterval(countdown, 1000);    
}


if(countdown == true) /*quando il countdown finisce */{
    valoriIns();
}



function countdown(){
    if(partenza == 0){
        clearInterval(partenza); //fine setInterval
        return true;        
    } else {
        document.getElementById('countdown').innerHTML = partenza;
        partenza--;
    }
}

function valoriIns(){
    
    var inseriti = [];
    // finito il tempo chiedo 5 prompt per riempire variabile "inseriti"
    
    while(inseriti.length<5){
        var valore = parseInt(prompt('Inserisci un numero di quelli che hai vistprima'));
        if(inseriti.includes(valore) != true){
            inseriti.push(valore);
        } else {
            alert ('numero già inserito');
        }
    }
    console.log(inseriti);
}





// confronto i due array e dico quanti sono stati indovinati e quali

