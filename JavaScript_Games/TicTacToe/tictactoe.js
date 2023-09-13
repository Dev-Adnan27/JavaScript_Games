var playBox, moves, playerTurn, GameOver, turnX, turnO, xwins, owins;

playBox = document.getElementsByClassName("playBox");
moves = 0;
playerTurn = "X";
GameOver = false;
turnX = document.getElementById("x-turn");
turnO = document.getElementById("o-turn");
reset = document.getElementById("newGame");
xwins = document.getElementById("x-wins");
owins = document.getElementById("o-wins");
function play(i) {
    if (i.dataset.player == "none" && window.GameOver == false) {
        i.innerHTML = playerTurn;
        i.dataset.player = playerTurn;
        moves++;
        if (playerTurn == "X") {
            playerTurn = "O";
            turnO.style.display = "block";
            turnX.style.display = "none";
        } else if (playerTurn == "O") {
            playerTurn = "X";
            turnX.style.display = "block";
            turnO.style.display = "none";

        }
    }

    winner(1, 2, 3);
    winner(4, 5, 6);
    winner(7, 8, 9);
    winner(1, 4, 7);
    winner(2, 5, 8);
    winner(3, 6, 9);
    winner(1, 5, 9);
    winner(3, 5, 7);

    if (moves == 9 && GameOver == false) {
        turnX.style.display = "none";
        turnO.style.display = "none";
        draw();
        GameOver = true;
    }
}
function winner(a, b, c) {
    a--, b--, c--;
    if (
        (playBox[a].dataset.player === playBox[b].dataset.player)
        && (playBox[b].dataset.player === playBox[c].dataset.player)
        && (playBox[a].dataset.player === playBox[c].dataset.player)
        && ((playBox[a].dataset.player === "X" || playBox[a].dataset.player === "O") && GameOver == false)
    ) {
        playBox[a].className += " Winner";
        playBox[b].className += " Winner";
        playBox[c].className += " Winner";
        turnX.style.display = "none";
        turnO.style.display = "none";
        GameOver = true;
        if (playBox[a].dataset.player === "X") {
            xwins.innerHTML = "Winner";
        } else {
            owins.innerHTML = "Winner";
        }
    }
}

function draw() {
            owins.innerHTML = "Draw";
            xwins.innerHTML = "Draw";
    
}

function newGame(){
location.reload();
}