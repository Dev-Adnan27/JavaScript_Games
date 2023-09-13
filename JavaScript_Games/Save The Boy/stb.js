let activeJokerHole = false;
let activeBoyHole = false;
let scoreUser = 0;
let jokerPop = null;
let boyPop = null;

window.addEventListener('mousemove', e => {
    hammer.style.top = e.pageY + 'px';
    hammer.style.left = e.pageX + 'px';
});
window.addEventListener('mousedown', () => {
    hammer.classList.add('active');
});
window.addEventListener('mouseup', () => {
    hammer.classList.remove('active');
});

for (let h = 0; h < 9; h++) {
    var hole = document.createElement('div');
    hole.classList.add('hole');
    game.appendChild(hole);
}

function setGame() {
    const holes = document.querySelectorAll('.hole');

    // Joker logic
    let x = Math.floor(Math.random() * holes.length);

    // Remove the previous jokerImg before creating a new one
    if (activeJokerHole && activeJokerHole.querySelector('.joker')) {
        const previousJoker = activeJokerHole.querySelector('.joker');
        activeJokerHole.removeChild(previousJoker);
    }

    activeJokerHole = holes[x];
    if (activeBoyHole && activeBoyHole.id == x) {
        x = Math.floor(Math.random() * holes.length);
        activeJokerHole = holes[x];
    };

    const jokerImg = document.createElement('img');
    jokerImg.src = 'images/joker.png';
    jokerImg.classList.add('joker');
    activeJokerHole.append(jokerImg);
    if (jokerPop) {
        clearTimeout(jokerPop);
    }
    jokerPop = setTimeout(() => {
        activeJokerHole.removeChild(jokerImg);
        setGame();
    }, 1000);
    jokerImg.addEventListener('click', () => {
        scoreUser += 5;
        score.innerHTML = scoreUser;
        if (scoreUser == 5) {
            score.innerHTML = '05';
        };
        jokerImg.src = 'images/bustedJoker.png';
        jokerImg.classList.remove('joker');
        jokerImg.classList.add('bustedJoker');
        if (jokerPop) {
            clearTimeout(jokerPop);
        }
        setTimeout(() => {
            activeJokerHole.removeChild(jokerImg);
            setGame();
        }, 500);

    });

    // Boy logic
    let y = Math.floor(Math.random() * holes.length);

    // Remove the previous boyImg before creating a new one
    if (activeBoyHole && activeBoyHole.querySelector('.boy')) {
        const previousBoy = activeBoyHole.querySelector('.boy');
        activeBoyHole.removeChild(previousBoy);
    }

    activeBoyHole = holes[y];
    if (activeJokerHole && activeJokerHole.id == y) {
        y = Math.floor(Math.random() * holes.length);
        activeBoyHole = holes[y];
    }
    const boyImg = document.createElement('img');
    boyImg.src = 'images/boy.png';
    boyImg.classList.add('boy');
    activeBoyHole.append(boyImg);
    if (boyPop) {
        clearTimeout(boyPop);
    }
    boyPop = setTimeout(() => {
        activeBoyHole.removeChild(boyImg);
        setGame();
    }, 2000);
    boyImg.addEventListener('click', () => {
        document.body.addEventListener('dblclick', () => {
            window.location.reload();
        });
        gameOver.innerHTML = 'You Killed an Innocent !!!';
        resetGame.innerHTML = 'Double-Click Anywhere To Restart.';
        boyImg.src = 'images/bustedBoy.png';
        boyImg.classList.remove('boy');
        boyImg.classList.add('bustedBoy');
        if (boyPop) {
            clearTimeout(boyPop);
        }
        if (jokerPop) {
            clearTimeout(jokerPop);
        }
        activeBoyHole.removeChild(boyImg);
    });
}

setGame();
