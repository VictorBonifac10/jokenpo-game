
let btnRock = document.querySelector("#rock")
let btnPaper = document.querySelector("#paper")
let btnScisor = document.querySelector("#scisor")
let result = document.querySelector('#result')

let scoreUser = 0
let scoreMaquina = 0

let yourScore = document.querySelector(".your-score")
let machineScore = document.querySelector(".machine-score")

function buttonRock() {

    let valueMaquina = Math.floor(Math.random() * (2 + 1))

    if (valueMaquina == 0) {
        valueMaquina = "rock"
        result.innerHTML = `Empate! Maquina escolheu ${valueMaquina}`

    } else if (valueMaquina == 1) {
        valueMaquina = "paper"
        result.innerHTML = `Maquina ganhou! Maquina escolheu ${valueMaquina}`

        scoreMaquina++
        machineScore.innerHTML = scoreMaquina

    } else {
        valueMaquina = "scisor"
        result.innerHTML = `Você ganhou! Maquina escolheu ${valueMaquina}`
        scoreUser++
        yourScore.innerHTML = scoreUser
    }
}

function buttonPaper() {

    let valueMaquina = Math.floor(Math.random() * (2 + 1))
    console.log(valueMaquina)

    if (valueMaquina == 0) {
        valueMaquina = "rock"
        result.innerHTML = `Você Ganhou! Maquina escolheu ${valueMaquina}`
        scoreUser++
        yourScore.innerHTML = scoreUser

    } else if (valueMaquina == 1) {
        valueMaquina = "paper"
        result.innerHTML = `Empate! Maquina escolheu ${valueMaquina}`
    } else {
        valueMaquina = "scisor"
        result.innerHTML = `Máquina ganhou! Maquina escolheu ${valueMaquina}`
        scoreMaquina++
        machineScore.innerHTML = scoreMaquina
    }
}

function buttonScisor() {

    let valueMaquina = Math.floor(Math.random() * (2 + 1))
    console.log(valueMaquina)

    if (valueMaquina == 0) {
        valueMaquina = "rock"
        result.innerHTML = `Máquina ganhou! Maquina escolheu ${valueMaquina}`
        scoreMaquina++
        machineScore.innerHTML = scoreMaquina

    } else if (valueMaquina == 1) {
        valueMaquina = "paper"
        result.innerHTML = `Você Ganhou! Maquina escolheu ${valueMaquina}`
        scoreUser++
        yourScore.innerHTML = scoreUser
    } else {
        valueMaquina = "scisor"
        result.innerHTML = `Empate! Maquina escolheu ${valueMaquina}`
    }
}

btnRock.addEventListener("click", buttonRock)
btnPaper.addEventListener("click", buttonPaper)
btnScisor.addEventListener("click", buttonScisor)