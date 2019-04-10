/*
Aufgabe: <2 - Mau Mau>
Name: <Lucas Rohrberg>
Matrikel: <260241>
Datum: <7. April 2019, 12:39Uhr>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
let handCards = [];
let newCard = "";
let cardAmount;
let Deck = [{ type: "hearts", order: 0, score: "7" }, { type: "hearts", order: 1, score: "8" }, { type: "hearts", order: 2, score: "9" }, { type: "hearts", order: 3, score: "10" }, { type: "hearts", order: 4, score: "jack" }, { type: "hearts", order: 5, score: "queen" }, { type: "hearts", order: 6, score: "king" }, { type: "hearts", order: 7, score: "ace" },
    { type: "diamonds", order: 8, score: "7" }, { type: "diamonds", order: 9, score: "8" }, { type: "diamonds", order: 10, score: "9" }, { type: "diamonds", order: 11, score: "10" }, { type: "diamonds", order: 12, score: "jack" }, { type: "diamonds", order: 13, score: "queen" }, { type: "diamonds", order: 14, score: "king" }, { type: "diamonds", order: 15, score: "ace" },
    { type: "spades", order: 24, score: "7" }, { type: "spades", order: 25, score: "8" }, { type: "spades", order: 26, score: "9" }, { type: "spades", order: 27, score: "10" }, { type: "spades", order: 28, score: "jack" }, { type: "spades", order: 29, score: "queen" }, { type: "spades", order: 30, score: "king" }, { type: "spades", order: 31, score: "ace" },
    { type: "clubs", order: 16, score: "7" }, { type: "clubs", order: 17, score: "8" }, { type: "clubs", order: 18, score: "9" }, { type: "clubs", order: 19, score: "10" }, { type: "clubs", order: 20, score: "jack" }, { type: "clubs", order: 21, score: "queen" }, { type: "clubs", order: 22, score: "king" }, { type: "clubs", order: 23, score: "ace" }];
function getCardAmount() {
    let enterCardAmount = prompt("Choose a number between 4 and 6");
    cardAmount = Number(enterCardAmount);
    if (isNaN(cardAmount) == true || cardAmount < 4 || cardAmount > 6)
        getCardAmount();
    return cardAmount;
}
function dealCards(_handCardsTotal) {
    for (let i = 0; i < _handCardsTotal; i++) {
        let randomCard = Math.floor(Math.random() * Deck.length);
        handCards.push(Deck[randomCard]);
        Deck.splice(randomCard, 1);
        writeHtml(i);
    }
}
function sortCards() {
    handCards.sort(function (a, b) {
        return a.order - b.order;
    });
}
function sortDisplay() {
    sortCards();
    document.getElementById("handCards").innerHTML = "";
    newCard = "";
    for (let i = 0; i < handCards.length; i++) {
        writeHtml(i);
    }
}
function writeHtml(_i) {
    newCard += `<div class="${handCards[_i].type}">${handCards[_i].score} of ${handCards[_i].type}</div>`;
    document.getElementById("handCards").innerHTML = newCard;
}
function playCard() {
}
dealCards(getCardAmount());
document.getElementById("sortCards").addEventListener("click", sortDisplay);
//# sourceMappingURL=main.js.map