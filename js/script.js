console.log('js ok');

//elementi del DOM
const startButton = document.getElementById('start-button');
const countdown =  document.getElementById('countdown');
const cpuRandomNumbers =  document.getElementById('random-numbers');
const card =  document.getElementById('number-card');
const input1Number =  document.getElementById('n1');
const input2Number =  document.getElementById('n2');
const input3Number =  document.getElementById('n3');
const input4Number =  document.getElementById('n4');
const input5Number =  document.getElementById('n5');
const inputButton =  document.getElementById('input-button');

console.log(input1Number.value)


//  |----------| //
//  | FUNZIONI | //
//  |----------| //

//generare numeri casuali
const getRandomNumbers = () => {
    const randomNumbers = [];

    let randomNumber;

    while(randomNumbers.length < 5){
      do{
        randomNumber = Math.floor(Math.random() * 100) + 1;
        }
        while(randomNumbers.includes(randomNumber));
        
        randomNumbers.push(randomNumber);          
    }
        return randomNumbers;
}


//inizio del gioco
const startGame = () =>{
    
    //disabilitare bottone d'inizio
    startButton.disabled = true;
    
    //numeri generati stampati in pagina
    const numbers = getRandomNumbers ();
    console.log(numbers)
    cpuRandomNumbers.innerText = `${numbers[0]} |  ${numbers[1]}  |  ${numbers[2]}  |  ${numbers[3]}  |  ${numbers[4]}`
    
    //partenza scansione dei secondi
    let second = 30;
    const timer = setInterval(() =>{
        //stampa in pagina
        countdown.innerText = --second;
    }, 1000)
    
    //scatto della seconda fase
    setTimeout(() =>{
        //interruzione scansione secondi
        clearInterval(timer);
        //inizio seconda fase
        secondFase();
    }, 30000) 
}

//seconda fase
function secondFase(){
    
    //rimozione numeri
    cpuRandomNumbers.classList.add('d-none');

    //apparizione card
    card.classList.remove('d-none');

    //bottone INVIA in ascolto
    inputButton.addEventListener('click', function(){

        //numeri inseriti dall'utente
        const user1Number = input1Number.value.trim();
        const user2Number = input2Number.value.trim();
        const user3Number = input3Number.value.trim();
        const user4Number = input4Number.value.trim();
        const user5Number = input5Number.value.trim();

        //preparare il punteggio
        let score = 0;

        //verifica dei numeri
        if(numbers.includes(user1Number || user2Number || user3Number || user4Number || user5Number)){
            score++;
        }

        console.log(score)



    })
}



//___________________________________________//

let timer;

//bottone INIZIA in ascolto
startButton.addEventListener('click', startGame)