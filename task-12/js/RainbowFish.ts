namespace t12 {
    export class RainbowFish extends Sealife {
        red: number;
        green: number;
        blue: number;

        constructor() {
            super();
            this.red = Math.random() * 255;
            this.green = Math.random() * 255;
            this.blue = Math.random() * 255;
        }
    
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
            
                let fishFin: Path2D = new Path2D();
                fishFin.moveTo(this.x + 90, this.y - 20);
                fishFin.lineTo(this.x + 67, this.y - 25);
                fishFin.lineTo(this.x + 67, this.y - 10);
                fishFin.lineTo(this.x + 90, this.y - 15);
                fishFin.closePath();
                crc.fillStyle = "#eeeeee";
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
            
                let fishFin: Path2D = new Path2D();
                fishFin.moveTo(this.x - 90, this.y - 20);
                fishFin.lineTo(this.x - 67, this.y - 25);
                fishFin.lineTo(this.x - 67, this.y - 10);
                fishFin.lineTo(this.x - 90, this.y - 15);
                fishFin.closePath();
                crc.fillStyle = "#eeeeee";
                crc.fill(fishFin);
            }
        }
        
        update(): void {
            this.red = Math.random() * 255;
            this.move();
            this.draw();
        }
    }
}