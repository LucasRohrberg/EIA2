let hearts:number[] = [7,8,9,10,11,12,13,14];
let diamonds:number[] = [7,8,9,10,11,12,13,14];
let spades:number[] = [7,8,9,10,11,12,13,14];
let clubs:number[] = [7,8,9,10,11,12,13,14];
let cards:number[] = [];

function getCardAmount() {
    let enterCardAmount = prompt("Enter the amount of cards the player gets:");
    let cardAmount = Number(enterCardAmount);
    return cardAmount;
}

for (let i = 0; i<getCardAmount(); i++) {
    let randomCard = Math.floor(Math.random()*100);
    let randomColor = Math.floor(Math.random()*100);
    
    
}