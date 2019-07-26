namespace t11 {
    export class Pufferfish {
        x: number;
        y: number;
        dx: number;
        size: number;
    
        draw(): void {
            if (this.size < 15) this.size = 15;
            if (this.dx >= 0) {
                let fishDown: Path2D = new Path2D();
                fishDown.arc(this.x, this.y, this.size, 0.5, 3.5);
                crc.fillStyle = `rgb(212, 205, 161)`;
                crc.stroke();
                crc.fill(fishDown);

                let fishUp: Path2D = new Path2D();
                fishUp.arc(this.x, this.y, this.size, 3.4, 0);
                crc.fillStyle = `rgb(156, 145, 70)`;
                crc.stroke();
                crc.fill(fishUp);

                let fishEye: Path2D = new Path2D();
                fishEye.arc(this.x + this.size / 3, this.y - this.size / 2, this.size / 4, 0, Math.PI * 2);
                crc.fillStyle = `rgb(61, 60, 58)`;
                crc.stroke();
                crc.fill(fishEye);

                let fishEyePupil: Path2D = new Path2D();
                fishEyePupil.arc(this.x + this.size / 2.5, this.y - this.size / 2, this.size / 8, 0, Math.PI * 2);
                crc.fillStyle = `rgb(231, 230, 250)`;
                crc.stroke();
                crc.fill(fishEyePupil);
            } else {
                let fishDown: Path2D = new Path2D();
                fishDown.arc(this.x, this.y, this.size, -0.5, 2.5);
                crc.fillStyle = `rgb(212, 205, 161)`;
                crc.stroke();
                crc.fill(fishDown);

                let fishUp: Path2D = new Path2D();
                fishUp.arc(this.x, this.y, this.size, -3.3, -0.4);
                crc.fillStyle = `rgb(156, 145, 70)`;
                crc.stroke();
                crc.fill(fishUp);

                let fishEye: Path2D = new Path2D();
                fishEye.arc(this.x - this.size / 3, this.y - this.size / 2, this.size / 4, 0, Math.PI * 2);
                crc.fillStyle = `rgb(61, 60, 58)`;
                crc.stroke();
                crc.fill(fishEye);

                let fishEyePupil: Path2D = new Path2D();
                fishEyePupil.arc(this.x - this.size / 2.5, this.y - this.size / 2, this.size / 8, 0, Math.PI * 2);
                crc.fillStyle = `rgb(231, 230, 250)`;
                crc.stroke();
                crc.fill(fishEyePupil);
            }
        }

        move(): void {
            this.x += this.dx;
            if (this.x > 1930) this.x = -10;
            if (this.x < -10) this.x = 1930;
        }

        update(): void {
            this.move();
            this.draw();
        }
    }
}