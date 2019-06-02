document.addEventListener("DOMContentLoaded", init);
let canvas;
let crc;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    drawWater();
    for (let i = 0; i < 35; i++) {
        let x = Math.random() * 1920;
        let y = Math.random() * 100;
        drawPlant(x, y);
    }
    drawSand();
    for (let i = 0; i < 5; i++) {
        let x = Math.random() * 1920;
        let y = Math.random() * 30;
        drawStone(x, y);
    }
    let x = Math.random() * 1920;
    drawShip(x);
    for (let i = 0; i < 20; i++) {
        let x = Math.random() * 1920;
        let y = Math.random() * 800;
        drawFish(x, y);
    }
    for (let i = 0; i < 150; i++) {
        let x = Math.random() * 1920;
        let y = Math.random() * 1080;
        let size = Math.random() * 15;
        drawBubbles(x, y, size);
    }
}
function drawWater() {
    let water = new Path2D();
    let gradient = crc.createLinearGradient(0, 0, 0, 1080);
    water.moveTo(0, 0);
    water.lineTo(1920, 0);
    water.lineTo(1920, 1080);
    water.lineTo(0, 1080);
    water.closePath();
    gradient.addColorStop(0, "#5a6fa8");
    gradient.addColorStop(1, "#35446e");
    crc.fillStyle = gradient;
    crc.fill(water);
}
function drawSand() {
    let sand = new Path2D();
    sand.moveTo(0, 820);
    sand.lineTo(600, 855);
    sand.lineTo(1920, 830);
    sand.lineTo(1920, 960);
    sand.lineTo(0, 960);
    sand.closePath();
    crc.fillStyle = "#ecd896";
    crc.fill(sand);
    let sandShadow = new Path2D();
    sandShadow.moveTo(600, 925);
    sandShadow.lineTo(1920, 900);
    sandShadow.lineTo(1920, 960);
    sandShadow.lineTo(0, 960);
    sandShadow.lineTo(0, 900);
    sandShadow.closePath();
    crc.fillStyle = "#bba96e";
    crc.fill(sandShadow);
}
function drawPlant(_x, _y) {
    let plant = new Path2D();
    plant.moveTo(_x, 900 - _y / 3);
    plant.lineTo(_x - 5, 840 - _y);
    if (_y > 50) {
        plant.lineTo(_x + 15, 800 - _y);
    }
    else {
        plant.lineTo(_x - 25, 800 - _y);
    }
    plant.lineTo(_x + 5, 750 - _y);
    plant.lineTo(_x, 700 - _y * 2);
    crc.strokeStyle = "#60945c";
    crc.lineWidth = 10;
    crc.stroke(plant);
}
function drawStone(_x, _y) {
    let stone = new Path2D();
    stone.moveTo(_x, 900);
    stone.lineTo(_x + 20, 870 - _y / 3);
    stone.lineTo(_x + 30, 880 - _y);
    stone.lineTo(_x + 55, 855 - _y / 2);
    stone.lineTo(_x + 60, 860 - _y / 2);
    stone.lineTo(_x + 65, 890 - _y);
    stone.lineTo(_x + 60, 900);
    crc.fillStyle = "#949494";
    crc.fill(stone);
}
function drawBubbles(_x, _y, _size) {
    let bubble = new Path2D();
    let transparency = Math.random();
    bubble.arc(_x, _y, _size, 0, Math.PI * 2);
    crc.fillStyle = `rgba(167, 211, 223, ${transparency})`;
    crc.stroke();
    crc.fill(bubble);
}
function drawShip(_x) {
    let mast = new Path2D();
    mast.moveTo(_x - 50, 800);
    mast.lineTo(_x - 90, 795);
    mast.lineTo(_x - 150, 500);
    mast.lineTo(_x - 115, 490);
    mast.closePath();
    crc.fillStyle = "#553b25";
    crc.fill(mast);
    let shipLeft = new Path2D();
    shipLeft.moveTo(_x - 15, 895);
    shipLeft.lineTo(_x - 365, 870);
    shipLeft.lineTo(_x - 475, 720);
    shipLeft.lineTo(_x - 35, 755);
    shipLeft.lineTo(_x - 10, 825);
    shipLeft.lineTo(_x - 45, 870);
    shipLeft.closePath();
    crc.fillStyle = "#6e4f35";
    crc.fill(shipLeft);
    let shipLeftShadow = new Path2D();
    shipLeftShadow.moveTo(_x - 15, 895);
    shipLeftShadow.lineTo(_x - 365, 870);
    shipLeftShadow.lineTo(_x - 395, 830);
    shipLeftShadow.lineTo(_x - 34, 880);
    shipLeftShadow.closePath();
    crc.fillStyle = "#553b25";
    crc.fill(shipLeftShadow);
    let shipRight = new Path2D();
    shipRight.moveTo(_x + 20, 910);
    shipRight.lineTo(_x + 385, 885);
    shipRight.lineTo(_x + 475, 740);
    shipRight.lineTo(_x + 40, 815);
    shipRight.lineTo(_x + 75, 845);
    shipRight.lineTo(_x + 15, 890);
    shipRight.closePath();
    crc.fillStyle = "#6e4f35";
    crc.fill(shipRight);
    let shipRightShadow = new Path2D();
    shipRightShadow.moveTo(_x + 20, 910);
    shipRightShadow.lineTo(_x + 385, 885);
    shipRightShadow.lineTo(_x + 404, 855);
    shipRightShadow.lineTo(_x + 18, 900);
    shipRightShadow.closePath();
    crc.fillStyle = "#553b25";
    crc.fill(shipRightShadow);
}
function drawFish(_x, _y) {
    let fish = new Path2D();
    fish.moveTo(_x, _y);
    fish.lineTo(_x, _y - 15);
    fish.lineTo(_x + 25, _y - 8);
    fish.lineTo(_x + 80, _y - 45);
    fish.lineTo(_x + 105, _y - 20);
    fish.lineTo(_x + 95, _y);
    fish.lineTo(_x + 25, _y - 8);
    fish.closePath();
    crc.fillStyle = "#9c5a24";
    crc.fill(fish);
    let fishFin = new Path2D();
    fishFin.moveTo(_x + 90, _y - 20);
    fishFin.lineTo(_x + 67, _y - 25);
    fishFin.lineTo(_x + 67, _y - 10);
    fishFin.lineTo(_x + 90, _y - 15);
    fishFin.closePath();
    crc.fillStyle = "#793e0f";
    crc.fill(fishFin);
}
//# sourceMappingURL=main.js.map