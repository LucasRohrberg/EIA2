var t11;
(function (t11) {
    class Fish {
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
                t11.crc.fillStyle = "#9c5a24";
                t11.crc.fill(fish);
                let fishFin = new Path2D();
                fishFin.moveTo(this.x + 90, this.y - 20);
                fishFin.lineTo(this.x + 67, this.y - 25);
                fishFin.lineTo(this.x + 67, this.y - 10);
                fishFin.lineTo(this.x + 90, this.y - 15);
                fishFin.closePath();
                t11.crc.fillStyle = "#793e0f";
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
                t11.crc.fillStyle = "#9c5a24";
                t11.crc.fill(fish);
                let fishFin = new Path2D();
                fishFin.moveTo(this.x - 90, this.y - 20);
                fishFin.lineTo(this.x - 67, this.y - 25);
                fishFin.lineTo(this.x - 67, this.y - 10);
                fishFin.lineTo(this.x - 90, this.y - 15);
                fishFin.closePath();
                t11.crc.fillStyle = "#793e0f";
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
    t11.Fish = Fish;
})(t11 || (t11 = {}));
//# sourceMappingURL=Fish.js.map