
let btnRock = document.querySelector("#rock")
let btnPaper = document.querySelector("#paper")
let btnScisor = document.querySelector("#scisor")
let result = document.querySelector('#result')

let scoreUser = 0
let scoreMaquina = 0

let yourScore = document.querySelector(".your-score")
let machineScore = document.querySelector(".machine-score")

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors' 
}

function buttonRock() {

    let valueMaquina = Math.floor(Math.random() * (2 + 1))

    if (valueMaquina == 0) {
        valueMaquina = GAME_OPTIONS.ROCK
        result.innerHTML = `Empate! Maquina escolheu ${valueMaquina}`

    } else if (valueMaquina == 1) {
        valueMaquina = GAME_OPTIONS.PAPER
        result.innerHTML = `Maquina ganhou! Maquina escolheu ${valueMaquina}`

        scoreMaquina++
        machineScore.innerHTML = scoreMaquina

    } else {
        valueMaquina = GAME_OPTIONS.SCISSORS
        result.innerHTML = `Você ganhou! Maquina escolheu ${valueMaquina}`
        scoreUser++
        yourScore.innerHTML = scoreUser
    }
}

function buttonPaper() {

    let valueMaquina = Math.floor(Math.random() * (2 + 1))
    console.log(valueMaquina)

    if (valueMaquina == 0) {
        valueMaquina = GAME_OPTIONS.ROCK
        result.innerHTML = `Você Ganhou! Maquina escolheu ${valueMaquina}`
        scoreUser++
        yourScore.innerHTML = scoreUser

    } else if (valueMaquina == 1) {
        valueMaquina = GAME_OPTIONS.PAPER
        result.innerHTML = `Empate! Maquina escolheu ${valueMaquina}`
    } else {
        valueMaquina = GAME_OPTIONS.SCISSORS
        result.innerHTML = `Máquina ganhou! Maquina escolheu ${valueMaquina}`
        scoreMaquina++
        machineScore.innerHTML = scoreMaquina
    }
}

function buttonScisor() {

    let valueMaquina = Math.floor(Math.random() * (2 + 1))
    console.log(valueMaquina)

    if (valueMaquina == 0) {
        valueMaquina = GAME_OPTIONS.ROCK
        result.innerHTML = `Máquina ganhou! Maquina escolheu ${valueMaquina}`
        scoreMaquina++
        machineScore.innerHTML = scoreMaquina

    } else if (valueMaquina == 1) {
        valueMaquina = GAME_OPTIONS.PAPER
        result.innerHTML = `Você Ganhou! Maquina escolheu ${valueMaquina}`
        scoreUser++
        yourScore.innerHTML = scoreUser
    } else {
        valueMaquina = GAME_OPTIONS.SCISSORS
        result.innerHTML = `Empate! Maquina escolheu ${valueMaquina}`
    }
}

btnRock.addEventListener("click", buttonRock)
btnPaper.addEventListener("click", buttonPaper)
btnScisor.addEventListener("click", buttonScisor)