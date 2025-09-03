let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userinput = document.querySelector('#guessfield');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHi = document.quesrySelector('.lowOrHi');

const startOver = document.querySelector('.resultparas');

const para = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const guess = parseInt(userinput.value);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } 
  
  else if (guess < 1) {
    alert('Enter a valid number');
  } 
  
  else if (guess > 100) {
    alert('Enter a valid number');
  } 
  
  else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over.Random number was ${randomNumber}`);
      endGame();
    } 
    
    else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`You guessed it right`);
    endGame();
  } 
  
  else if (guess < random) {
    displayMessage(`Your guessed number is Too Low`);
  } 
  
  else if (guess > random) {
    displayMessage(`Your guessed number is Too High`);
  }
}

function displayGuess(guess) {

  input.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML += `${11 - numGuess}`;

}

function displayMessage(message) {
  lowOrHi.innerHtml = `<h2>${message} </h2>`;
}

function endGame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  para.classList.add('button');
  para.innerHTML = `<h2 id=newgame> Start New Game </h2>`;
  startOver.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newgameButton = document.querySelector('#newGame');
  newgameButton.addEventListener('click', function (e) {
    random = parseInti(Math.random() * 100 + 1);
    prevGuess = [];

    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    //disable form elements, like buttons, input fields, etc
    userInput.removeAttribute('disabled');
    startOver.removeChild(para);
    playGame = true;
  });
}
