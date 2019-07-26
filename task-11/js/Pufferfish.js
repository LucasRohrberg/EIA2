var t11;
(function (t11) {
    class Pufferfish {
        draw() {
            if (this.size < 15)
                this.size = 15;
            if (this.dx >= 0) {
                let fishDown = new Path2D();
                fishDown.arc(this.x, this.y, this.size, 0.5, 3.5);
                t11.crc.fillStyle = `rgb(212, 205, 161)`;
                t11.crc.stroke();
                t11.crc.fill(fishDown);
                let fishUp = new Path2D();
                fishUp.arc(this.x, this.y, this.size, 3.4, 0);
                t11.crc.fillStyle = `rgb(156, 145, 70)`;
                t11.crc.stroke();
                t11.crc.fill(fishUp);
                let fishEye = new Path2D();
                fishEye.arc(this.x + this.size / 3, this.y - this.size / 2, this.size / 4, 0, Math.PI * 2);
                t11.crc.fillStyle = `rgb(61, 60, 58)`;
                t11.crc.stroke();
                t11.crc.fill(fishEye);
                let fishEyePupil = new Path2D();
                fishEyePupil.arc(this.x + this.size / 2.5, this.y - this.size / 2, this.size / 8, 0, Math.PI * 2);
                t11.crc.fillStyle = `rgb(231, 230, 250)`;
                t11.crc.stroke();
                t11.crc.fill(fishEyePupil);
            }
            else {
                let fishDown = new Path2D();
                fishDown.arc(this.x, this.y, this.size, -0.5, 2.5);
                t11.crc.fillStyle = `rgb(212, 205, 161)`;
                t11.crc.stroke();
                t11.crc.fill(fishDown);
                let fishUp = new Path2D();
                fishUp.arc(this.x, this.y, this.size, -3.3, -0.4);
                t11.crc.fillStyle = `rgb(156, 145, 70)`;
                t11.crc.stroke();
                t11.crc.fill(fishUp);
                let fishEye = new Path2D();
                fishEye.arc(this.x - this.size / 3, this.y - this.size / 2, this.size / 4, 0, Math.PI * 2);
                t11.crc.fillStyle = `rgb(61, 60, 58)`;
                t11.crc.stroke();
                t11.crc.fill(fishEye);
                let fishEyePupil = new Path2D();
                fishEyePupil.arc(this.x - this.size / 2.5, this.y - this.size / 2, this.size / 8, 0, Math.PI * 2);
                t11.crc.fillStyle = `rgb(231, 230, 250)`;
                t11.crc.stroke();
                t11.crc.fill(fishEyePupil);
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
    t11.Pufferfish = Pufferfish;
})(t11 || (t11 = {}));
//# sourceMappingURL=Pufferfish.js.map