interface Card {
    
}

function getCardAmount() {
    let enterCardAmount = prompt("Enter the amount of cards the player gets:");
    let cardAmount = Number(enterCardAmount);
    return cardAmount;
}