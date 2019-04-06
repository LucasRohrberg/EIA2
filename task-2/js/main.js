let handCards = [];
let Deck = [{ type: "hearts", score: "7" }, { type: "hearts", score: "8" }, { type: "hearts", score: "9" }, { type: "hearts", score: "10" }, { type: "hearts", score: "jack" }, { type: "hearts", score: "queen" }, { type: "hearts", score: "king" }, { type: "hearts", score: "ace" },
    { type: "diamonds", score: "7" }, { type: "diamonds", score: "8" }, { type: "diamonds", score: "9" }, { type: "diamonds", score: "10" }, { type: "diamonds", score: "jack" }, { type: "diamonds", score: "queen" }, { type: "diamonds", score: "king" }, { type: "diamonds", score: "ace" },
    { type: "spades", score: "7" }, { type: "spades", score: "8" }, { type: "spades", score: "9" }, { type: "spades", score: "10" }, { type: "spades", score: "jack" }, { type: "spades", score: "queen" }, { type: "spades", score: "king" }, { type: "spades", score: "ace" },
    { type: "clubs", score: "7" }, { type: "clubs", score: "8" }, { type: "clubs", score: "9" }, { type: "clubs", score: "10" }, { type: "clubs", score: "jack" }, { type: "clubs", score: "queen" }, { type: "clubs", score: "king" }, { type: "clubs", score: "ace" }];
function getCardAmount() {
    let enterCardAmount = prompt("Enter the amount of cards the player gets:");
    let cardAmount = Number(enterCardAmount);
    return cardAmount;
}
function dealCards(_handCardsTotal) {
    let newCard = "";
    for (let i = 0; i < _handCardsTotal; i++) {
        let randomCard = Math.floor(Math.random() * Deck.length);
        handCards.push(Deck[randomCard]);
        console.log(handCards[i]);
        newCard += `<div id="i${i}" class="${handCards[i].type}">${handCards[i].score} of ${handCards[i].type}</div>`;
        Deck.splice(randomCard, 1);
    }
    document.getElementById("handCards").innerHTML = newCard;
}
dealCards(getCardAmount());
//# sourceMappingURL=main.js.map