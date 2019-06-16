var t11;
(function (t11) {
    document.addEventListener("DOMContentLoaded", init);
    let fps = 60;
    let xShip = Math.random() * 1920;
    let imageData;
    let fishArray = [];
    let rainbowFishArray = [];
    let pufferfishArray = [];
    let bubblesArray = [];
    function init() {
        t11.canvas = document.getElementsByTagName("canvas")[0];
        t11.crc = t11.canvas.getContext("2d");
        alert("VORSICHT: Epilepsie Warnung!");
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
        drawShip(xShip);
        imageData = t11.crc.getImageData(0, 0, t11.canvas.width, t11.canvas.height);
        for (let i = 0; i < 25; i++) {
            let fish = new t11.Fish;
            let x = Math.random() * 1920;
            let y = Math.random() * 800;
            let dx = Math.random() * 10 - 5;
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fishArray.push(fish);
        }
        for (let i = 0; i < 1; i++) {
            let rainbowFish = new t11.RainbowFish;
            let x = Math.random() * 1920;
            let y = Math.random() * 800;
            let dx = Math.random() * 30 - 15;
            rainbowFish.x = x;
            rainbowFish.y = y;
            rainbowFish.dx = dx;
            rainbowFishArray.push(rainbowFish);
        }
        for (let i = 0; i < 5; i++) {
            let fish = new t11.Pufferfish;
            let x = Math.random() * 1920;
            let y = Math.random() * 800;
            let dx = Math.random() * 6 - 3;
            let size = Math.random() * 50;
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fish.size = size;
            pufferfishArray.push(fish);
        }
        update();
    }
    function update() {
        setTimeout(update, 1000 / fps);
        t11.crc.clearRect(0, 0, t11.canvas.width, t11.canvas.height);
        t11.crc.putImageData(imageData, 0, 0);
        let bubble = new t11.Bubbles;
        let size = Math.random() * 15;
        let transparency = Math.random();
        let dx = Math.random() * 80 - 40;
        bubble.x = xShip;
        bubble.y = 850;
        bubble.dx = dx;
        bubble.dy = 3;
        bubble.size = size;
        bubble.transparency = transparency;
        bubblesArray.push(bubble);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
        for (let i = 0; i < rainbowFishArray.length; i++) {
            let red = Math.random() * 255;
            let green = Math.random() * 255;
            let blue = Math.random() * 255;
            rainbowFishArray[i].red = red;
            rainbowFishArray[i].green = green;
            rainbowFishArray[i].blue = blue;
            rainbowFishArray[i].update();
        }
        for (let i = 0; i < pufferfishArray.length; i++) {
            pufferfishArray[i].update();
        }
        for (let i = 0; i < bubblesArray.length; i++) {
            bubblesArray[i].update();
        }
    }
    function drawWater() {
        let water = new Path2D();
        let gradient = t11.crc.createLinearGradient(0, 0, 0, 1080);
        water.moveTo(0, 0);
        water.lineTo(1920, 0);
        water.lineTo(1920, 1080);
        water.lineTo(0, 1080);
        water.closePath();
        gradient.addColorStop(0, "#5a6fa8");
        gradient.addColorStop(1, "#35446e");
        t11.crc.fillStyle = gradient;
        t11.crc.fill(water);
    }
    function drawSand() {
        let sand = new Path2D();
        sand.moveTo(0, 820);
        sand.lineTo(600, 855);
        sand.lineTo(1920, 830);
        sand.lineTo(1920, 960);
        sand.lineTo(0, 960);
        sand.closePath();
        t11.crc.fillStyle = "#ecd896";
        t11.crc.fill(sand);
        let sandShadow = new Path2D();
        sandShadow.moveTo(600, 925);
        sandShadow.lineTo(1920, 900);
        sandShadow.lineTo(1920, 960);
        sandShadow.lineTo(0, 960);
        sandShadow.lineTo(0, 900);
        sandShadow.closePath();
        t11.crc.fillStyle = "#bba96e";
        t11.crc.fill(sandShadow);
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
        t11.crc.strokeStyle = "#60945c";
        t11.crc.lineWidth = 10;
        t11.crc.stroke(plant);
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
        t11.crc.fillStyle = "#949494";
        t11.crc.fill(stone);
    }
    function drawShip(_x) {
        let mast = new Path2D();
        mast.moveTo(_x - 50, 800);
        mast.lineTo(_x - 90, 795);
        mast.lineTo(_x - 150, 500);
        mast.lineTo(_x - 115, 490);
        mast.closePath();
        t11.crc.fillStyle = "#553b25";
        t11.crc.fill(mast);
        let shipLeft = new Path2D();
        shipLeft.moveTo(_x - 15, 895);
        shipLeft.lineTo(_x - 365, 870);
        shipLeft.lineTo(_x - 475, 720);
        shipLeft.lineTo(_x - 35, 755);
        shipLeft.lineTo(_x - 10, 825);
        shipLeft.lineTo(_x - 45, 870);
        shipLeft.closePath();
        t11.crc.fillStyle = "#6e4f35";
        t11.crc.fill(shipLeft);
        let shipLeftShadow = new Path2D();
        shipLeftShadow.moveTo(_x - 15, 895);
        shipLeftShadow.lineTo(_x - 365, 870);
        shipLeftShadow.lineTo(_x - 395, 830);
        shipLeftShadow.lineTo(_x - 34, 880);
        shipLeftShadow.closePath();
        t11.crc.fillStyle = "#553b25";
        t11.crc.fill(shipLeftShadow);
        let shipRight = new Path2D();
        shipRight.moveTo(_x + 20, 910);
        shipRight.lineTo(_x + 385, 885);
        shipRight.lineTo(_x + 475, 740);
        shipRight.lineTo(_x + 40, 815);
        shipRight.lineTo(_x + 75, 845);
        shipRight.lineTo(_x + 15, 890);
        shipRight.closePath();
        t11.crc.fillStyle = "#6e4f35";
        t11.crc.fill(shipRight);
        let shipRightShadow = new Path2D();
        shipRightShadow.moveTo(_x + 20, 910);
        shipRightShadow.lineTo(_x + 385, 885);
        shipRightShadow.lineTo(_x + 404, 855);
        shipRightShadow.lineTo(_x + 18, 900);
        shipRightShadow.closePath();
        t11.crc.fillStyle = "#553b25";
        t11.crc.fill(shipRightShadow);
    }
})(t11 || (t11 = {}));
//# sourceMappingURL=main.js.map