console.log('js ok');

//elementi del DOM
const startButton = document.getElementById('start-button');
const countdown =  document.getElementById('countdown');
const cpuRandomNumbers =  document.getElementById('random-numbers');
const card =  document.getElementById('number-card');
const userNumber1 =  document.getElementById('n1');
const userNumber2 =  document.getElementById('n2');
const userNumber3 =  document.getElementById('n3');
const userNumber4 =  document.getElementById('n4');
const userNumber5 =  document.getElementById('n5');
const inputButton =  document.getElementById('input-button');


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

