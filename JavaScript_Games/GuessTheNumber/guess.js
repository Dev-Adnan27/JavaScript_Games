var compNum, player, guess, score;

score = 0;
guess = 0;
playerGuess.addEventListener('click', () => {
    guess++;
    player = PlayerNum.value;
    if (player == compNum) {
        message.innerHTML = "Yippee!! You Guessed it in " + guess + " tries";
        score += 5;
        document.getElementById('score').innerHTML = score;
        guess = 0;
        hardMode();

    } else if (player > compNum) {
        message.innerHTML = "Try Again with a Smaller Number";
        if (score >= 1) {
            score--;
        }
        document.getElementById('score').innerHTML = score;
    } else if (player < compNum) {
        message.innerHTML = "Try Again with a Bigger Number";
        if (score >= 1) {
            score--;
        }
        document.getElementById('score').innerHTML = score;
    }
})
function easyMode() {
    compNum = Math.round(Math.random() * (10 - 1) + 1);
    gNum.innerHTML = "Guess A Number Between 1 to 10";
    difficulty.innerHTML = "Easy";

}
function medMode() {
    compNum = Math.round(Math.random() * (30 - 1) + 1);
    gNum.innerHTML = "Guess A Number Between 1 to 30";
    difficulty.innerHTML = "Medium";
}
function hardMode() {
    compNum = Math.round(Math.random() * (50 - 1) + 1);
    gNum.innerHTML = "Guess A Number Between 1 to 50";
    difficulty.innerHTML = "Hard";
}
function expMode() {
    compNum = Math.round(Math.random() * (100 - 1) + 1);
    gNum.innerHTML = "Guess A Number Between 1 to 100";
    difficulty.innerHTML = "Expert";
}

reset.addEventListener("click", () => {
    location.reload();
})