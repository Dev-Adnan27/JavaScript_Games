var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function () {
    setGame();
}
document.addEventListener('keyup', (e) => {
    if (e.code == "ArrowLeft" || e.code == "KeyA") {
        slideLeft();
        if (isGameOver()) {
            alert('Game Over. Thank You for Playing Your Final Score is: ' + score);
            window.location.reload()
        }
        startTile();
    }
    if (e.code == "ArrowRight" || e.code == "KeyD") {
        slideRight();
        if (isGameOver()) {
            alert('Game Over. Thank You for Playing Your Final Score is: ' + score);
            window.location.reload()
        }
        startTile();

    }
    if (e.code == "ArrowUp" || e.code == "KeyW") {
        slideUp();
        if (isGameOver()) {
            alert('Game Over. Thank You for Playing Your Final Score is: ' + score);
            window.location.reload()
        }
        startTile();

    }
    if (e.code == "ArrowDown" || e.code == "KeyS") {
        slideDown();
        if (isGameOver()) {
            alert('Game Over. Thank You for Playing Your Final Score is: ' + score);
            window.location.reload()
        }
        startTile();
    }
});
function setGame() {

    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement('div');
            tile.id = r.toString() + '-' + c.toString();
            let value = board[r][c];
            updateTile(tile, value);
            gamePad.append(tile);
        }
    };

    startTile();
    startTile();
}
function isEmpty() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
           if(board[r][c] == 0){
            return true;
           }
        }
    }
    return false;
}
function startTile() {
    if (!isEmpty()) {
        return;
    };
    let foundTile = false;
    while (!foundTile) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);

        if (board[r][c] == 0) {
            board[r][c] = 2;
            let tile = document.getElementById(r.toString() + '-' + c.toString())
            tile.innerText = 2;
            tile.classList.add('x2');
            foundTile = true;
        }
    }
}
function updateTile(tile, value) {
    tile.innerText = '';
    tile.classList.value = '';
    tile.classList.add('numTile');
    if (value > 0) {
        tile.innerText = value;
        if (value <= 2048) {
            tile.classList.add("x" + value.toString());
        } else {
            tile.classList.add("x4096");
        }
    }
}
function filterZero(row) {
    return row.filter(value => value != 0);
}
function slide(row) {
    row = filterZero(row);
    for (let i = 0; i < row.length; i++) {
        if (row[i] == row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
            score += row[i];
            scoreCard.innerText = score;
        }
    }
    row = filterZero(row);
    while (row.length < columns) {
        row.push(0);
    }
    return row;
}
function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row;

        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + '-' + c.toString());
            let value = board[r][c];
            updateTile(tile, value);
        }
    }
}
function slideRight() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row.reverse();
        row = slide(row);
        row.reverse();
        board[r] = row;

        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + '-' + c.toString());
            let value = board[r][c];
            updateTile(tile, value);
        }
    }
}
function slideUp() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + '-' + c.toString());
            let value = board[r][c];
            updateTile(tile, value);
        }
    }
}
function slideDown() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + '-' + c.toString());
            let value = board[r][c];
            updateTile(tile, value);
        }
    }
};

function isGameOver() {
    // Check if there are any empty cells
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] === 0) {
                return false; // Game is not over
            }
        }
    }

    // Check if there are any adjacent cells with the same value
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            // Check left
            if (c > 0 && board[r][c] === board[r][c - 1]) {
                return false; // Game is not over
            }
            // Check right
            if (c < columns - 1 && board[r][c] === board[r][c + 1]) {
                return false; // Game is not over
            }
            // Check above
            if (r > 0 && board[r][c] === board[r - 1][c]) {
                return false; // Game is not over
            }
            // Check below
            if (r < rows - 1 && board[r][c] === board[r + 1][c]) {
                return false; // Game is not over
            }
        }
    }

    return true; // No valid moves left, game over
}
