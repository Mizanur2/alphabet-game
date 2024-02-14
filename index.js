function continueGame() {
    const alphabet = randomAlphbet()

    //set the alphabet to the game display
    const gameDisplay = document.getElementById('game-display')
    gameDisplay.innerText = alphabet
    setBg(alphabet)

}


function play() {
    hideElementById('start-game')
    showElementById('game-panel')
    continueGame()
}

function setBg(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300')
    console.log(element);
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
    console.log(alphabet)
    return alphabet;
}