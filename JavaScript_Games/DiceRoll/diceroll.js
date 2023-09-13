let score1 = 0;
let score2 = 0;

async function rollDice() {
    let x = Math.round(Math.random() * (6 - 1) + 1);
    let y = Math.round(Math.random() * (6 - 1) + 1);

    await rollAnimation('diceP1', x);
    await rollAnimation('diceP2', y);

    if (x > y) {
        score1++;
    } else if (y > x) {
        score2++;
    }

    document.getElementById("scoreP1").innerHTML = score1;
    document.getElementById("scoreP2").innerHTML = score2;

    if (score1 === 10) {
        alert('Congratulations! Player 1 has won!');
        resetGame();
    } else if (score2 === 10) {
        alert('Congratulations! Player 2 has won!');
        resetGame();
    }
}

async function rollAnimation(diceId, value) {
    for (let i = 1; i <= 6; i++) {
        await sleep(100);
        let randomValue = Math.round(Math.random() * 5) + 1;
        document.getElementById(diceId).src = "images/dice/" + randomValue + ".png";
    }
    document.getElementById(diceId).src = "images/dice/" + value + ".png";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function resetGame() {
    score1 = 0;
    score2 = 0;
    document.getElementById("scoreP1").innerHTML = score1;
    document.getElementById("scoreP2").innerHTML = score2;

}
