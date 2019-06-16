namespace t11 {
    export class RainbowFish {
        x: number;
        y: number;
        dx: number;
        red: number;
        green: number;
        blue: number;
    
        draw(): void {
            if (this.dx >= 0) {
                let fish: Path2D = new Path2D();
                fish.moveTo(this.x, this.y);
                fish.lineTo(this.x, this.y - 15);
                fish.lineTo(this.x + 25, this.y - 8);
                fish.lineTo(this.x + 80, this.y - 45);
                fish.lineTo(this.x + 105, this.y - 20);
                fish.lineTo(this.x + 95, this.y);
                fish.lineTo(this.x + 25, this.y - 8);
                fish.closePath();
                crc.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
                crc.fill(fish);
                crc.strokeStyle = "brown";
                crc.lineWidth = 1;
                crc.stroke(fish);
            
                let fishFin: Path2D = new Path2D();
                fishFin.moveTo(this.x + 90, this.y - 20);
                fishFin.lineTo(this.x + 67, this.y - 25);
                fishFin.lineTo(this.x + 67, this.y - 10);
                fishFin.lineTo(this.x + 90, this.y - 15);
                fishFin.closePath();
                crc.fillStyle = "#dddddd";
                crc.fill(fishFin);
            } else {
                let fish: Path2D = new Path2D();
                fish.moveTo(this.x, this.y);
                fish.lineTo(this.x, this.y - 15);
                fish.lineTo(this.x - 25, this.y - 8);
                fish.lineTo(this.x - 80, this.y - 45);
                fish.lineTo(this.x - 105, this.y - 20);
                fish.lineTo(this.x - 95, this.y);
                fish.lineTo(this.x - 25, this.y - 8);
                fish.closePath();
                crc.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
                crc.fill(fish);
                crc.strokeStyle = "brown";
                crc.lineWidth = 1;
                crc.stroke(fish);
            
                let fishFin: Path2D = new Path2D();
                fishFin.moveTo(this.x - 90, this.y - 20);
                fishFin.lineTo(this.x - 67, this.y - 25);
                fishFin.lineTo(this.x - 67, this.y - 10);
                fishFin.lineTo(this.x - 90, this.y - 15);
                fishFin.closePath();
                crc.fillStyle = "#dddddd";
                crc.fill(fishFin);
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