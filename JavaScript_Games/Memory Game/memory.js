const matches = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png'];
const pickList = [...matches, ...matches];
const cardsCount = pickList.length;
let revealedCards = 0;
let activeCard = null;
let endOfMove = false;

function cardBuilder(cardSrc) {

    let card = document.createElement('img');
    card.classList.add('cards');
    card.setAttribute('src', 'images/0.png');
    card.setAttribute('data-src', cardSrc);
    card.setAttribute('data-revealed', 'false');


    card.addEventListener('click', () => {
        let revealedCard = card.getAttribute('data-revealed');
        if (endOfMove || revealedCard === 'true' || card === activeCard) {
            return;
        };
        card.setAttribute('src', cardSrc);
        if (!activeCard) {
            activeCard = card;
            return;
        }

        const cardToMatch = activeCard.getAttribute('data-src');

        if (cardToMatch === cardSrc) {
            activeCard.setAttribute('data-revealed', 'true');
            endOfMove = false;
            activeCard = null;
            revealedCards += 2;
            if (revealedCards === cardsCount) {
                winNotif.innerText = 'Yippie!!! You Won!';
            }
            return;
        };

        endOfMove = true;
        setTimeout(() => {
            card.setAttribute('src', 'images/0.png');
            activeCard.setAttribute('src', 'images/0.png');
            endOfMove = false;
            activeCard = null;
        }, 500)
    });
    return card;

}

for (c = 0; c < cardsCount; c++) {
    let cardIndex = Math.floor(Math.random() * pickList.length);
    let cardSrc = pickList[cardIndex];
    let block = cardBuilder(cardSrc);
    pickList.splice(cardIndex, 1);
    game.appendChild(block);
}

function resetGame(){
    window.location.reload();
}