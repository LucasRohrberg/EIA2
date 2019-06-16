var t11;
(function (t11) {
    class RainbowFish {
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
                t11.crc.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
                t11.crc.fill(fish);
                t11.crc.strokeStyle = "brown";
                t11.crc.lineWidth = 1;
                t11.crc.stroke(fish);
                let fishFin = new Path2D();
                fishFin.moveTo(this.x + 90, this.y - 20);
                fishFin.lineTo(this.x + 67, this.y - 25);
                fishFin.lineTo(this.x + 67, this.y - 10);
                fishFin.lineTo(this.x + 90, this.y - 15);
                fishFin.closePath();
                t11.crc.fillStyle = "#dddddd";
                t11.crc.fill(fishFin);
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
                t11.crc.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
                t11.crc.fill(fish);
                t11.crc.strokeStyle = "brown";
                t11.crc.lineWidth = 1;
                t11.crc.stroke(fish);
                let fishFin = new Path2D();
                fishFin.moveTo(this.x - 90, this.y - 20);
                fishFin.lineTo(this.x - 67, this.y - 25);
                fishFin.lineTo(this.x - 67, this.y - 10);
                fishFin.lineTo(this.x - 90, this.y - 15);
                fishFin.closePath();
                t11.crc.fillStyle = "#dddddd";
                t11.crc.fill(fishFin);
            }
        }
        move() {
            this.x += this.dx;
            if (this.x > 1930)
                this.x = -10;
            if (this.x < -10)
                this.x = 1930;
        }
        update() {
            this.move();
            this.draw();
        }
    }
    t11.RainbowFish = RainbowFish;
})(t11 || (t11 = {}));
//# sourceMappingURL=RainbowFish.js.map