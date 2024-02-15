function continueGame() {
    const alphabet = randomAlphbet()
    console.log(alphabet);
    //set the alphabet to the game display
    const gameDisplay = document.getElementById('game-display')
    gameDisplay.innerText = alphabet
    setBg(alphabet)
    // removeBg(alphabet)
    // scoreUpdate('final-score')

}

function keyPressedOnKeyboard(e) {
    const playerChoice = e.key;

    if (playerChoice === 'Escape') {
        gameOver()
    }

    //get computer choice 

    const computerChoice = document.getElementById('game-display').innerText.toLowerCase();
    // console.log(computerChoice);
    if (playerChoice === computerChoice) {
        //score updating
        scoreUpdate('score')
        scoreUpdate('final-score')

        //conitnue game
        removeBg(computerChoice)
        continueGame()
    }
    else {
        lifeUpdate()
        // alert('you lose')
    }

}
document.addEventListener('keyup', keyPressedOnKeyboard)

function play() {
    const alphabet = randomAlphbet()
    console.log(alphabet);
    removeBg(alphabet)
    hideElementById('start-game');
    hideElementById('game-over');
    showElementById('game-panel');
    // scoreUpdate('final-score')

    continueGame();
    document.getElementById('final-score').innerText = 0;

    //life update 

    const currentLifeElement = document.getElementById('life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    const newLife = 5;
    currentLifeElement.innerText = newLife;

    //score update
    const currentScoreElement = document.getElementById('score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    const newScore = 0;
    currentScoreElement.innerText = newScore
}

function scoreUpdate(elementId) {
    const currentScoreElement = document.getElementById(elementId);
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore
}

function finalScore() {
    const finalScore = document.getElementById('final-score').innerText;
    const lastScore = document.getElementById('score');
    lastScore.innerText = finalScore;

}

function lifeUpdate() {
    const currentLifeElement = document.getElementById('life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    const alphabet = randomAlphbet()
    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;
    // console.log(currentLife);
    if (newLife === 0) {
        // alert('you lose')
        // removeBg(alphabet)
        gameOver()
    }
}

function gameOver() {
    hideElementById('game-panel')
    showElementById('game-over')
    finalScore()
    // scoreUpdate('final-score')
    // removeBg(alphabet)
}

function setBg(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300')
    // console.log(element);
}
function removeBg(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-300')
    // console.log(element);
}



function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function randomAlphbet() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsArr = alphabets.split('');
    const singleAlphabet = Math.round(Math.random() * alphabetsArr.length - 1);
    const alphabet = alphabetsArr[singleAlphabet]
    // console.log(alphabet)
    return alphabet;
}