/*
Aufgabe: <3 - Mau Mau wird interaktiv>
Name: <Lucas Rohrberg>
Matrikel: <260241>
Datum: <11. April 2019, 04:08Uhr>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

interface Card {
    type: string;
    score: string;
    order: number;
}

document.getElementById("sortCards").addEventListener("click", sortDisplay);
document.getElementById("deck").addEventListener("click", drawCard);
window.addEventListener("keydown", checkSpacebar);

let handCards: Card[] = [];
let playedCards: Card[] = [];
let newCard: string = "";
let newestPlayedCard: string = "";
let cardAmount: number;

let deck: Card[] = [{ type: "hearts", order: 0, score: "7" }, { type: "hearts", order: 1, score: "8" }, { type: "hearts", order: 2, score: "9" }, { type: "hearts", order: 3, score: "10" }, { type: "hearts", order: 4, score: "jack" }, { type: "hearts", order: 5, score: "queen" }, { type: "hearts", order: 6, score: "king" }, { type: "hearts", order: 7, score: "ace" },
{ type: "diamonds", order: 8, score: "7" }, { type: "diamonds", order: 9, score: "8" }, { type: "diamonds", order: 10, score: "9" }, { type: "diamonds", order: 11, score: "10" }, { type: "diamonds", order: 12, score: "jack" }, { type: "diamonds", order: 13, score: "queen" }, { type: "diamonds", order: 14, score: "king" }, { type: "diamonds", order: 15, score: "ace" },
{ type: "clubs", order: 16, score: "7" }, { type: "clubs", order: 17, score: "8" }, { type: "clubs", order: 18, score: "9" }, { type: "clubs", order: 19, score: "10" }, { type: "clubs", order: 20, score: "jack" }, { type: "clubs", order: 21, score: "queen" }, { type: "clubs", order: 22, score: "king" }, { type: "clubs", order: 23, score: "ace" },
{ type: "spades", order: 24, score: "7" }, { type: "spades", order: 25, score: "8" }, { type: "spades", order: 26, score: "9" }, { type: "spades", order: 27, score: "10" }, { type: "spades", order: 28, score: "jack" }, { type: "spades", order: 29, score: "queen" }, { type: "spades", order: 30, score: "king" }, { type: "spades", order: 31, score: "ace" }];

function getCardAmount(): number {
    let enterCardAmount: string = prompt("Choose a number between 4 and 6");
    cardAmount = Number(enterCardAmount);
    if (isNaN(cardAmount) == true || cardAmount < 4 || cardAmount > 6) getCardAmount();
    return cardAmount;
}

function dealCards(_handCardsTotal: number): void {
    for (let i = 0; i < _handCardsTotal; i++) {
        let randomNumber: number = Math.floor(Math.random() * deck.length);
        handCards.push(deck[randomNumber]);
        deck.splice(randomNumber, 1);
        writeHtml(i);
    }
}

function writeHtml(_position: number): void {
    newCard += `<div class="${handCards[_position].type}" id="${handCards[_position].order}">${handCards[_position].score} of ${handCards[_position].type}</div>`;
    document.getElementById("handCards").innerHTML = newCard;
    document.getElementById("handCards").addEventListener("click", playCard);
    document.getElementById("deck").innerHTML = `deck: ${deck.length} cards left`;
}

function playCard(): void {
    let cardID: HTMLElement = <HTMLElement>event.target;
    for (let i = 0; i < handCards.length; i++) {
        if (Number(cardID.getAttribute("id")) == handCards[i].order) {
            playedCards.push(handCards[i]);
            newestPlayedCard = `<div class="${playedCards[playedCards.length - 1].type}" id="${playedCards[playedCards.length - 1].order}">${playedCards[playedCards.length - 1].score} of ${playedCards[playedCards.length - 1].type}</div>`;
            document.getElementById("playedCards").innerHTML = newestPlayedCard;
            handCards.splice(i, 1);
            document.getElementById("handCards").innerHTML = "";
            newCard = "";
            for (let i = 0; i < handCards.length; i++) {
                writeHtml(i);
            }
        }
    }
}

function drawCard(): void {
    if (deck.length > 0) {
        let randomNumber: number = Math.floor(Math.random() * deck.length);
        handCards.push(deck[randomNumber]);
        deck.splice(randomNumber, 1);
        writeHtml(handCards.length - 1)
    } else {
        alert("The deck is empty.");
    }
}

function checkSpacebar(event: KeyboardEvent): void {
    if (event.keyCode == 32) drawCard();
}

function sortCards() {
    handCards.sort(sortingCommand);
}

function sortingCommand(a: Card, b: Card): number {
    let orderA: number = a.order;
    let orderB: number = b.order;
    if (orderA < orderB) return -1;
    if (orderA > orderB) return 1;
    if (orderA == orderB) return 0;
}

function sortDisplay(): void {
    sortCards();
    document.getElementById("handCards").innerHTML = "";
    newCard = "";
    for (let i = 0; i < handCards.length; i++) {
        writeHtml(i);
    }
}

dealCards(getCardAmount());