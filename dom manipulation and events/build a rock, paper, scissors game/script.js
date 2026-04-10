/* =================================================== */
/* VARIABEL OPTION */
/* TEST KEDUA */
/* =================================================== */
const options = ['Rock', 'Paper', 'Scissors']

const getRandomComputerResult = () => {
    const randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
}

let playerScore = 0
let computerScore = 0


const hasPlayerWonTheRound = (playerChoice, computerChoice) => {
    if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        return true
    }
    return false
}

const getRoundResults = (userOption) => {
    const computerResult = getRandomComputerResult()

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++
        return `You wins! ${userOption} beats ${computerResult}`
    } else if (userOption === computerResult) {
        return `It's a tie! Both chose ${userOption}`
    } else {
        computerScore++
        return `Computer wins! ${computerResult} beats ${userOption}`
    }
}

const playerScoreSpanElement = document.getElementById('player-score')
const computerScoreSpanElement = document.getElementById('computer-score')
const roundResultsMsg = document.getElementById('results-msg')
const winnerMsgElement = document.getElementById('winner-msg')
const optionsContainer = document.querySelector('.options-container')
const resetGameBtn = document.getElementById('reset-game-btn')

const showResults = (userOption) => {
    /* Upadate roundResultMsg dengan nilai ronde */
    roundResultsMsg.innerText = getRoundResults(userOption)

    /* Update playerScoreSpanElement dengan skor player terbaru*/
    playerScoreSpanElement.innerText = playerScore

    /* Update computerScoreSpanElement dengan skor computer terbaru*/
    computerScoreSpanElement.innerHTML = computerScore

    /* Cek pemenang game (first to 3 points) */
    if (playerScore === 3) {
        winnerMsgElement.innerText = 'Player has won the game!'
        resetGameBtn.style.display = 'block'
        optionsContainer.style.display = 'none'
    } else if (computerScore === 3) {
        winnerMsgElement.innerText = 'Computer has won the game!'
        resetGameBtn.style.display = 'block'
        optionsContainer.style.display = 'none'
    }
}

const resetGame = () => {
    /* reset skor ke 0  */
    playerScore = 0
    computerScore = 0

    /* update tampilan skor */
    playerScoreSpanElement.innerText = playerScore
    computerScoreSpanElement.innerText = computerScore

    /* hapus isi pesan */
    roundResultsMsg.innerText = ''
    winnerMsgElement.innerText = ''

    /* sembunyikan tombol reset */
    resetGameBtn.style.display = 'none'

    /* tampilakan kembali tombol pilihan */
    optionsContainer.style.display = 'block'
}

resetGameBtn.addEventListener('click', () => {
    resetGame()
})

const rockBtn = document.getElementById('rock-btn')
const paperBtn = document.getElementById('paper-btn')
const scissorsBtn = document.getElementById('scissors-btn')

rockBtn.addEventListener('click', () => {
    showResults('Rock')
})

paperBtn.addEventListener('click', () => {
    showResults('Paper')
})

scissorsBtn.addEventListener('click', () => {
    showResults('Scissors')
})