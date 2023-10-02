const buttonTry = document.querySelector('#sendAttempt')
const buttonPlayAgain = document.querySelector('#playAgain')
let screen2 = document.querySelector('.screen2')
let screen1 = document.querySelector('.screen1')
let chooseNumber = document.querySelector('#number')

let randomNumber = Math.round(Math.random() * 10)

let attempts = 1

function handleClick(e) {
    e.preventDefault()

    if(Number(chooseNumber.value) == randomNumber) {
        screen1.classList.toggle('hide')
        screen2.classList.toggle('hide')

        let h2 = document.querySelector('h2')
        h2.innerText = `Acertou em ${attempts}`

    }
    chooseNumber.value = ''
    attempts++
}
function handleReset() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
    attempts = 1
    randomNumber = Math.round(Math.random() * 10)
}


buttonTry.addEventListener('click', handleClick)
buttonPlayAgain.addEventListener('click', handleReset)