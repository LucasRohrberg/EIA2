var t12;
(function (t12) {
    class RainbowFish extends t12.Sealife {
        constructor() {
            super();
            this.red = Math.random() * 255;
            this.green = Math.random() * 255;
            this.blue = Math.random() * 255;
        }
        draw() {
            if (this.dx >= 0) {
                let fish = new Path2D();
                fish.moveTo(this.x, this.y);
                fish.lineTo(this.x, this.y - 15);
                fish.lineTo(this.x + 25, this.y - 8);
                fish.lineTo(this.x + 80, this.y - 45);
                fish.lineTo(this.x + 105, this.y - 20);
                fish.lineTo(this.x + 95, this.y);
                fish.lineTo(this.x + 25, this.y - 8);
                fish.closePath();
                t12.crc.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
                t12.crc.fill(fish);
                let fishFin = new Path2D();
                fishFin.moveTo(this.x + 90, this.y - 20);
                fishFin.lineTo(this.x + 67, this.y - 25);
                fishFin.lineTo(this.x + 67, this.y - 10);
                fishFin.lineTo(this.x + 90, this.y - 15);
                fishFin.closePath();
                t12.crc.fillStyle = "#eeeeee";
                t12.crc.fill(fishFin);
            }
            else {
                let fish = new Path2D();
                fish.moveTo(this.x, this.y);
                fish.lineTo(this.x, this.y - 15);
                fish.lineTo(this.x - 25, this.y - 8);
                fish.lineTo(this.x - 80, this.y - 45);
                fish.lineTo(this.x - 105, this.y - 20);
                fish.lineTo(this.x - 95, this.y);
                fish.lineTo(this.x - 25, this.y - 8);
                fish.closePath();
                t12.crc.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
                t12.crc.fill(fish);
                let fishFin = new Path2D();
                fishFin.moveTo(this.x - 90, this.y - 20);
                fishFin.lineTo(this.x - 67, this.y - 25);
                fishFin.lineTo(this.x - 67, this.y - 10);
                fishFin.lineTo(this.x - 90, this.y - 15);
                fishFin.closePath();
                t12.crc.fillStyle = "#eeeeee";
                t12.crc.fill(fishFin);
            }
        }
        update() {
            this.red = Math.random() * 255;
            this.move();
            this.draw();
        }
    }
    t12.RainbowFish = RainbowFish;
})(t12 || (t12 = {}));
//# sourceMappingURL=RainbowFish.js.map