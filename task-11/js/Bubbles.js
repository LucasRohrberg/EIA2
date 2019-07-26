var t11;
(function (t11) {
    class Bubbles {
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x + this.dx, this.y, this.size, 0, Math.PI * 2);
            t11.crc.fillStyle = `rgba(167, 211, 223, ${this.transparency})`;
            t11.crc.stroke();
            t11.crc.fill(bubble);
        }
        move() {
            this.y -= this.dy;
        }
        update() {
            this.move();
            this.draw();
        }
    }
    t11.Bubbles = Bubbles;
})(t11 || (t11 = {}));
//# sourceMappingURL=Bubbles.js.map