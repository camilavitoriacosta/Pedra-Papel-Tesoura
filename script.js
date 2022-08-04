/* CONTAGEM DE PONTOS */
var placar = {
    'user': 0,
    'pc': 0
}

/* ELEMENTOS APLICAÇÃO */
const imgUser = document.getElementById('user');
const imgPc = document.getElementById('pc');
const playing = document.getElementById('playing');
const contador = document.getElementById('contador');
const winner = document.getElementById('winner');
const loser = document.getElementById('loser');

/* SONS */
const audioWin = new Audio('assets/sounds/winning.wav')
const audioLose = new Audio('assets/sounds/losing.wav')

/* VARIAVEIS DE ELEMENTOS */
var player1 = "";
var player2 = "";

playing.addEventListener("click", () => {
    reset();
    playPc();
    analyze();
});

function reset() {
    player1 = document.querySelector('input[name="play"]:checked').value;
    imgUser.innerHTML = "<img src='assets/images/" + player1 + ".png'>";
    imgPc.innerHTML = "";
}

function playPc() {
    let opt = ['rock', 'paper', 'scissor'];
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player2 = opt[num];
    imgPc.innerHTML = "<img src='assets/images/" + player2 + ".png'>";
}


/* 
      1 - Vitoria
      0 - Empate
    - 1 - Derrota
 */
function analyze() {

    playing.disabled = true

    let win = "0"

    if (player1 == player2) {

    } else if (player1 == "rock") {
        win = player2 == 'scissor' ? 1 : -1
    } else if (player1 == 'paper') {
        win = player2 == 'rock' ? 1 : -1
    } else if (player1 == 'scissor') {
        win = player2 == 'paper' ? 1 : -1
    }

    if (win == 0) {

    } else if (win > 0) {
        placar.user = placar.user + 1
        audioWin.play()
    } else {
        placar.pc = placar.pc + 1
        audioLose.play()
    }

    if (placar.user >= 5) {
        winner.classList.remove('none')
        winner.classList.add('center')
    }

    if (placar.pc >= 5) {
        loser.classList.remove('none')
        loser.classList.add('center')
    }

    contador.innerHTML = placar.user + ":" + placar.pc

    setTimeout(() => {
        playing.disabled = false
        clear();
    }, 2000)
}

function clear() {
    imgPc.innerHTML = "";
    imgUser.innerHTML = "";
}

function newGame() {
    contador.innerHTML = "0:0"
    placar.pc = 0
    placar.user = 0
    reset()
    winner.classList.add('none')
    winner.classList.remove('center')
    loser.classList.add('none')
    loser.classList.remove('center')
}

