namespace t11 {
    document.addEventListener("DOMContentLoaded", init);
    export let canvas: HTMLCanvasElement;
    let crc: CanvasRenderingContext2D;
    let fps: number = 30;
    let imageData: ImageData;
    let fishArray: Fish[] = [];

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        // drawWater();
        // for (let i: number = 0; i < 35; i++) {
        //     let x: number = Math.random() * 1920;
        //     let y: number = Math.random() * 100;
        //     drawPlant(x, y);
        // }
        // drawSand();
        // imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
        // for (let i: number = 0; i < 5; i++) {
        //     let x: number = Math.random() * 1920;
        //     let y: number = Math.random() * 30;        
        //     drawStone(x, y);
        // }
        // let x: number = Math.random() * 1920;
        // drawShip(x);
        // for (let i: number = 0; i < 20; i++) {
        //     let x: number = Math.random() * 1920;
        //     let y: number = Math.random() * 800; 
        //     drawFish(x, y);
        // }
        // for (let i: number = 0; i < 150; i++) {
        //     let x: number = Math.random() * 1920;
        //     let y: number = Math.random() * 1080; 
        //     let size: number = Math.random() * 15;
        //     drawBubbles(x, y, size);
        // }
    }

    function update(): void {
        setTimeout(update, 1000 / fps);
        crc.putImageData(imageData, 0, 0);
        crc.clearRect(0, 0, canvas.width, canvas.height);

        let fish: Fish = new Fish;
        fishArray.push(fish);

        for (let i: number = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
    }
    
    function drawWater(): void {
        let water: Path2D = new Path2D();
        let gradient: CanvasGradient = crc.createLinearGradient(0, 0, 0, 1080);
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
    
    function drawSand(): void {
        let sand: Path2D = new Path2D();
        sand.moveTo(0, 820);
        sand.lineTo(600, 855);
        sand.lineTo(1920, 830);
        sand.lineTo(1920, 960);
        sand.lineTo(0, 960);
        sand.closePath();
        crc.fillStyle = "#ecd896";
        crc.fill(sand);
        let sandShadow: Path2D = new Path2D();
        sandShadow.moveTo(600, 925);
        sandShadow.lineTo(1920, 900);
        sandShadow.lineTo(1920, 960);
        sandShadow.lineTo(0, 960);
        sandShadow.lineTo(0, 900);
        sandShadow.closePath();
        crc.fillStyle = "#bba96e";
        crc.fill(sandShadow);
    }
    
    function drawPlant(_x: number, _y: number): void {
        let plant: Path2D = new Path2D();
        plant.moveTo(_x, 900 - _y / 3);
        plant.lineTo(_x - 5, 840 - _y);
        if (_y > 50) {
            plant.lineTo(_x + 15, 800 - _y);
        } else {
            plant.lineTo(_x - 25, 800 - _y);
        }
        plant.lineTo(_x + 5, 750 - _y);
        plant.lineTo(_x, 700 - _y * 2);
        crc.strokeStyle = "#60945c";
        crc.lineWidth = 10;
        crc.stroke(plant);
    }
    
    function drawStone(_x: number, _y: number): void {
        let stone: Path2D = new Path2D();
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
    
    function drawBubbles(_x: number, _y: number, _size: number): void {
        let bubble: Path2D = new Path2D();
        let transparency: number = Math.random();
        bubble.arc(_x, _y, _size, 0, Math.PI * 2);
        crc.fillStyle = `rgba(167, 211, 223, ${transparency})`;
        crc.stroke();
        crc.fill(bubble);
    }
    
    function drawShip(_x: number): void {
        let mast: Path2D = new Path2D();
        mast.moveTo(_x - 50, 800);
        mast.lineTo(_x - 90, 795);
        mast.lineTo(_x - 150, 500);
        mast.lineTo(_x - 115, 490);
        mast.closePath();
        crc.fillStyle = "#553b25";
        crc.fill(mast);
    
        let shipLeft: Path2D = new Path2D();
        shipLeft.moveTo(_x - 15, 895);
        shipLeft.lineTo(_x - 365, 870);
        shipLeft.lineTo(_x - 475, 720);
        shipLeft.lineTo(_x - 35, 755);
        shipLeft.lineTo(_x - 10, 825);
        shipLeft.lineTo(_x - 45, 870);
        shipLeft.closePath();
        crc.fillStyle = "#6e4f35";
        crc.fill(shipLeft);
    
        let shipLeftShadow: Path2D = new Path2D();
        shipLeftShadow.moveTo(_x - 15, 895);
        shipLeftShadow.lineTo(_x - 365, 870);
        shipLeftShadow.lineTo(_x - 395, 830);
        shipLeftShadow.lineTo(_x - 34, 880);
        shipLeftShadow.closePath();
        crc.fillStyle = "#553b25";
        crc.fill(shipLeftShadow);
    
        let shipRight: Path2D = new Path2D();
        shipRight.moveTo(_x + 20, 910);
        shipRight.lineTo(_x + 385, 885);
        shipRight.lineTo(_x + 475, 740);
        shipRight.lineTo(_x + 40, 815);
        shipRight.lineTo(_x + 75, 845);
        shipRight.lineTo(_x + 15, 890);
        shipRight.closePath();
        crc.fillStyle = "#6e4f35";
        crc.fill(shipRight);
    
        let shipRightShadow: Path2D = new Path2D();
        shipRightShadow.moveTo(_x + 20, 910);
        shipRightShadow.lineTo(_x + 385, 885);
        shipRightShadow.lineTo(_x + 404, 855);
        shipRightShadow.lineTo(_x + 18, 900);
        shipRightShadow.closePath();
        crc.fillStyle = "#553b25";
        crc.fill(shipRightShadow);
    }
}