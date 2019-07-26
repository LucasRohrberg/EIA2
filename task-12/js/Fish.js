var t12;
(function (t12) {
    class Fish extends t12.Sealife {
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
                t12.crc.fillStyle = "#9c5a24";
                t12.crc.fill(fish);
                let fishFin = new Path2D();
                fishFin.moveTo(this.x + 90, this.y - 20);
                fishFin.lineTo(this.x + 67, this.y - 25);
                fishFin.lineTo(this.x + 67, this.y - 10);
                fishFin.lineTo(this.x + 90, this.y - 15);
                fishFin.closePath();
                t12.crc.fillStyle = "#793e0f";
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
                t12.crc.fillStyle = "#9c5a24";
                t12.crc.fill(fish);
                let fishFin = new Path2D();
                fishFin.moveTo(this.x - 90, this.y - 20);
                fishFin.lineTo(this.x - 67, this.y - 25);
                fishFin.lineTo(this.x - 67, this.y - 10);
                fishFin.lineTo(this.x - 90, this.y - 15);
                fishFin.closePath();
                t12.crc.fillStyle = "#793e0f";
                t12.crc.fill(fishFin);
            }
        }
    }
    t12.Fish = Fish;
})(t12 || (t12 = {}));
//# sourceMappingURL=Fish.js.map