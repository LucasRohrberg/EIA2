var t12;
(function (t12) {
    class Bubbles extends t12.Things {
        constructor(_shipX) {
            super();
            this.x = _shipX;
            this.y = 850;
            this.dx = Math.random() * 80 - 40;
            this.dy = 3;
            this.size = Math.random() * 15;
            this.transparency = Math.random();
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x + this.dx, this.y, this.size, 0, Math.PI * 2);
            t12.crc.fillStyle = `rgba(167, 211, 223, ${this.transparency})`;
            t12.crc.stroke();
            t12.crc.fill(bubble);
        }
        move() {
            this.y -= this.dy;
        }
    }
    t12.Bubbles = Bubbles;
})(t12 || (t12 = {}));
//# sourceMappingURL=Bubbles.js.map