let Title = document.title;
window.addEventListener("blur", () => {
    document.title = "Continue Playing...";
});
window.addEventListener("focus", () => {
    document.title = Title;
});

const rock = rockBtn;
const scissor = scisorBtn;
const paper = paperBtn;
let mov3s = 7;
let pointsPlayer = 0;
let pointsComp = 0;
let player = [rock, scissor, paper];

player.forEach(e => {
    e.addEventListener("click", () => {
        let player = e.innerHTML;
        mov3s--;
        moves.innerText = mov3s;
        let computer = ["Rock", "Scissor", "Paper"];
        let random = Math.floor(Math.random() * 3);
        let compSel = computer[random];
        if (mov3s == 0) {
            gameOver.style.display = "flex";
            game.style.display = "none";
        };
        if (compSel == "Paper") {
            screenComp.src = "images/paper.png";
        } else if (compSel == "Scissor") {
            screenComp.src = "images/scissor.png";
        } else if (compSel == "Rock") {
            screenComp.src = "images/rock.png";
        };
        if (player == "Paper") {
            screenPlayer.src = "images/paper.png";
        } else if (player == "Scissor") {
            screenPlayer.src = "images/scissor.png";
        } else if (player == "Rock") {
            screenPlayer.src = "images/rock.png";
        };
        switch (true) {
            case (player == compSel):
                result.innerText = "Tie";
                pointsComp++;
                pointsPlayer++;
                break;
            case (player == "Rock" && compSel == "Paper"):
                result.innerText = "Computer Wins";
                pointsComp++;
                break;
            case (player == "Paper" && compSel == "Rock"):
                result.innerText = "Player Wins";
                pointsPlayer++;
                break;
            case (player == "Rock" && compSel == "Scissor"):
                result.innerText = "Player Wins";
                pointsPlayer++;
                break;
            case (player == "Scissor" && compSel == "Rock"):
                result.innerText = "Computer Wins";
                pointsComp++;
                break;
            case (player == "Scissor" && compSel == "Paper"):
                result.innerText = "Player Wins";
                pointsPlayer++;
                break;
            case (player == "Paper" && compSel == "Scissor"):
                result.innerText = "Computer Wins";
                pointsComp++;
                break;
        };
        if (mov3s == 0 && pointsComp > pointsPlayer) {
            resultG.innerText = "Computer Won The Game";
            greet.innerText = "Better Luck Next Time";
            gameOver.style.backgroundColor = "red";
        } else if (mov3s == 0 && pointsPlayer > pointsComp) {
            resultG.innerText = "You Won The Game";
            greet.innerText = "Congratulations!!!";
            gameOver.style.backgroundColor = "green";
        } else if (mov3s == 0 && pointsPlayer == pointsComp) {
            resultG.innerText = "Game Drawn";
            greet.innerText = "Give It Another Chance";
            gameOver.style.backgroundColor = "yellow";
        };
        scoreComp.innerHTML = pointsComp;
        scorePlayer.innerHTML = pointsPlayer;
    })

});

restart.addEventListener("click", () => {
    window.location.reload();
});


