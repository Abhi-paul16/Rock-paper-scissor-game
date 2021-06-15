// getting buttons,images

let buttons = document.querySelectorAll('.bg-circle')
let main = document.getElementById('main')
let scorevalue = document.getElementById('score')
let selected = document.getElementById('selected')
let playerhtml = document.getElementById('player-select')
let comphtml = document.getElementById('comp-select')
let playbtn = document.getElementById('play-again')
let result = document.getElementById('result')
let userimage = document.getElementById('user-image')
let compimage = document.getElementById('comp-image')
let score = 0;


// choices array

const choices = ['paper', 'rock', 'scissors']


// for hiding main
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        main.classList.add('hide-btns');
        selected.classList.add('selection-shower')
        let playerChoice = button.getAttribute('data-choice')
        let ComputerChoice = randomchoice();


        checkwinner();

        updateselection(comphtml, ComputerChoice);
        updateselection(playerhtml, playerChoice);
        updateimage(playerChoice, ComputerChoice)

        //checking of winner b/w comp and player

        function checkwinner() {

            if (playerChoice == ComputerChoice) {

                updatescore(0)
                result.innerText = "DRAW"

            }
            if (playerChoice == 'paper' & ComputerChoice == 'rock' || playerChoice == 'rock' & ComputerChoice == 'scissors' || playerChoice == 'scissors' & ComputerChoice == 'paper') {
                updatescore(1)
                result.innerText = "YOU WIN"
            }
            if (playerChoice == 'paper' & ComputerChoice == 'scissors' || playerChoice == 'rock' & ComputerChoice == 'paper' || playerChoice == 'scissors' & ComputerChoice == 'rock') {
                updatescore(-1)
                result.innerText = "YOU LOSE"
            }

        }

    })
})

//score updating function
function updatescore(value) {
    score += value;
    scorevalue.innerHTML = score
}

// computer  choices function

function randomchoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}


//upadting function of selected buttons by computer and player
function updateselection(SelectedEl, Choice) {
    SelectedEl.classList.add('bg-circle')
    SelectedEl.classList.add(Choice)

}

//upadting function of selected buttons images by computer and player
function updateimage(userchoice, compchoice) {
    userimage.src = `images/icon-${userchoice}.svg`
    compimage.src = `images/icon-${compchoice}.svg`
}


//reset btn

playbtn.addEventListener('click', reset)

function reset(choice) {

    main.classList.remove('hide-btns');
    selected.classList.remove('selection-shower')

    comphtml.classList.remove('rock')
    comphtml.classList.remove('paper')
    comphtml.classList.remove('scissors')
    playerhtml.classList.remove('rock')
    playerhtml.classList.remove('paper')
    playerhtml.classList.remove('scissors')
}




//rules

let rules = document.querySelector('.rules-btn')
let rulecard = document.getElementById('rule-card')
let rulecloser = document.getElementById('close-rules')

rules.addEventListener('click', () => {
    rulecard.classList.toggle('rule-show')
})
rulecloser.addEventListener('click', () => {
    rulecard.classList.remove('rule-show')
})