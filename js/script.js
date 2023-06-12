console.log('js ok');

//elementi del DOM
const startButton = document.getElementById('start-button');
const countdown =  document.getElementById('countdown');
const cpuRandomNumbers =  document.getElementById('random-numbers');
const card =  document.getElementById('number-card');
const inputs = document.querySelectorAll('input');
const inputButton =  document.getElementById('input-button');
let numbers;

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
function startGame(){
    
    //disabilitare bottone d'inizio
    startButton.disabled = true;
    
    //numeri generati stampati in pagina
    let numbers = getRandomNumbers ();
    console.log(numbers)
    cpuRandomNumbers.innerText = `${numbers[0]} |  ${numbers[1]}  |  ${numbers[2]}  |  ${numbers[3]}  |  ${numbers[4]}`
    
    //partenza scansione dei secondi
    let second = 30;
    const timer = setInterval(() =>{

        if(second === 1){
            //interruzione scansione secondi
           clearInterval(timer); 
          //inizio seconda fase
           secondFase();
        }
        //stampa in pagina
        countdown.innerText = --second;
    }, 1000)
}

//seconda fase
function secondFase(){
    
    //rimozione numeri
    cpuRandomNumbers.classList.add('d-none');

    //apparizione card
    card.classList.remove('d-none');

    //bottone INVIA in ascolto
    inputButton.addEventListener('click', (event) => {
        
        //blocco del form
        event.preventDefault();

        //mettere i numeri scelti dall'utente in un array
        const userNumbers = [];

        for (let i = 0; i < inputs.length; i++){
            const userValue = inputs[i].value;

            //validazione
            if(!isNaN(userValue) && userValue >= 0 && userValue <= 100 && !numbers.includes(userValue)){
                
                userNumbers.push(userValue);
            }
        }

        //preparare il punteggio
        let score = [];

        //verifica dei numeri
        for(let i = 0; i < userNumbers; i++){

            if(numbers.includes(userValue)){
                score.push(userValue);
            }
        }

        console.log(score)

        //stampare il messaggio in pagina
        alert(`Hai indovinato ${score.length} numeri: ${score}`);

    })
}



//___________________________________________//

let timer;

//bottone INIZIA in ascolto
startButton.addEventListener('click', startGame)