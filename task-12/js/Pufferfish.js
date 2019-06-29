var t12;
(function (t12) {
    class Pufferfish extends t12.Sealife {
        constructor() {
            super();
            this.size = Math.random() * 50;
            this.dx = Math.random() * 6 - 3;
        }
        draw() {
            if (this.size < 15)
                this.size = 15;
            if (this.dx >= 0) {
                let fishDown = new Path2D();
                fishDown.arc(this.x, this.y, this.size, 0.5, 3.5);
                t12.crc.fillStyle = `rgb(212, 205, 161)`;
                t12.crc.stroke();
                t12.crc.fill(fishDown);
                let fishUp = new Path2D();
                fishUp.arc(this.x, this.y, this.size, 3.4, 0);
                t12.crc.fillStyle = `rgb(156, 145, 70)`;
                t12.crc.stroke();
                t12.crc.fill(fishUp);
                let fishEye = new Path2D();
                fishEye.arc(this.x + this.size / 3, this.y - this.size / 2, this.size / 4, 0, Math.PI * 2);
                t12.crc.fillStyle = `rgb(61, 60, 58)`;
                t12.crc.stroke();
                t12.crc.fill(fishEye);
                let fishEyePupil = new Path2D();
                fishEyePupil.arc(this.x + this.size / 2.5, this.y - this.size / 2, this.size / 8, 0, Math.PI * 2);
                t12.crc.fillStyle = `rgb(231, 230, 250)`;
                t12.crc.stroke();
                t12.crc.fill(fishEyePupil);
            }
            else {
                let fishDown = new Path2D();
                fishDown.arc(this.x, this.y, this.size, -0.5, 2.5);
                t12.crc.fillStyle = `rgb(212, 205, 161)`;
                t12.crc.stroke();
                t12.crc.fill(fishDown);
                let fishUp = new Path2D();
                fishUp.arc(this.x, this.y, this.size, -3.3, -0.4);
                t12.crc.fillStyle = `rgb(156, 145, 70)`;
                t12.crc.stroke();
                t12.crc.fill(fishUp);
                let fishEye = new Path2D();
                fishEye.arc(this.x - this.size / 3, this.y - this.size / 2, this.size / 4, 0, Math.PI * 2);
                t12.crc.fillStyle = `rgb(61, 60, 58)`;
                t12.crc.stroke();
                t12.crc.fill(fishEye);
                let fishEyePupil = new Path2D();
                fishEyePupil.arc(this.x - this.size / 2.5, this.y - this.size / 2, this.size / 8, 0, Math.PI * 2);
                t12.crc.fillStyle = `rgb(231, 230, 250)`;
                t12.crc.stroke();
                t12.crc.fill(fishEyePupil);
            }
        }
    }
    t12.Pufferfish = Pufferfish;
})(t12 || (t12 = {}));
//# sourceMappingURL=Pufferfish.js.map