/* =================================================== */
/* TEST PERTAMA */
/* =================================================== */
const playerScoreElement = document.getElementById('player-score')
const computerScoreElement = document.getElementById('computer-score')
const resultsMsgElement = document.getElementById('results-msg')
const winnerMsgElement = document.getElementById('winner-msg')
const resetGameBtn = document.getElementById('reset-game-btn')
/* =================================================== */
/* MENGAMBIL TOMBOL DARI DOM */
/* =================================================== */
const rockBtn = document.getElementById('rock-btn')
const paperBtn = document.getElementById('paper-btn')
const scissorsBtn = document.getElementById('scissors-btn')

/* =================================================== */
/* VARIABEL SKOR */
/* MASUKAN KE BAGIAN BAWAH */
/* =================================================== */
let playerScore = 0
let computerScore = 0

/* =================================================== */
/* FUNGSI GET COMPUTER CHOICE */
/* =================================================== */
const getComputerChoice = () => {
    const choises = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * 3)
    return choises[randomIndex]
}

/* =================================================== */
/* FUNGSI GET WINNER */
/* =================================================== */
const getWinner = (player, computer) => {
    if (player === computer) {
        return 'draw'
    }

    if (player === 'rock' && computer === 'scissors') return 'player'
    if (player === 'paper' && computer === 'rock') return 'player'
    if (player === 'scissors' && computer === 'paper') return 'player'
    return 'computer'
}

/* =================================================== */
/* FUNGSI UPDATE GAME */
/* =================================================== */
const updateGame = (playerChoice) => {
    const computerChoice = getComputerChoice()
    const winner = getWinner(playerChoice, computerChoice)

    if (winner === 'player') {
        playerScore++
        resultsMsgElement.textContent = 'You chose' + playerChoice + ' .Computer chose' + computerChoice + '. You win!'
    } else if (winner === 'computer') {
        computerChoice++
        resultsMsgElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. Computer wins this round!`
    } else {
        resultsMsgElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. It's a draw!`
    }

    playerScoreElement.textContent = playerScore
    computerScoreElement.textContent = computerScore

    /* CEK PEMENANG GAME (FIRST TO  3) */
    if (playerScore === 3) {
        winnerMsgElement.textContent = 'Congratulations! You won the game! 🎉'
        disableButtons()
    } else if (computerScore === 3) {
        winnerMsgElement.textContent = 'Game Over! Computer won the game! 😞'
        disableButtons()
    }
}

/* =================================================== */
/* FUNGSI DISABLE BUTTONS */
/* =================================================== */
const disableButtons = () => {
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true
}

/* =================================================== */
/* FUNGSI ENABLE BUTTONS */
/* =================================================== */
const enableButtons = () => {
    rockBtn.disabled = false
    paperBtn.disabled = false
    scissorsBtn.disabled = false
}

/* =================================================== */
/* FUNGSI RESET GAME */
/* =================================================== */
const resetGame = () => {
    playerScore = 0
    computerScore = 0

    playerScoreElement.textContent = '0'
    computerScoreElement.textContent = '0'
    resultsMsgElement.textContent = ''
    winnerMsgElement.textContent = ''

    enableButtons()
}

/* =================================================== */
/* EVENT LISTENER */
/* =================================================== */
rockBtn.addEventListener('click', () => updateGame('rock'))
paperBtn.addEventListener('click', () => updateGame('paper'))
scissorsBtn.addEventListener('click', () => updateGame('scissors'))
resetGameBtn.addEventListener('click', resetGame)

