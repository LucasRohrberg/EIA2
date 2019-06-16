namespace t11 {
    export class Bubbles {
        x: number;
        y: number;
        dx: number;
        dy: number;
        size: number;
        transparency: number;
    
        draw(): void {
            let bubble: Path2D = new Path2D();
            bubble.arc(this.x + this.dx, this.y, this.size, 0, Math.PI * 2);
            crc.fillStyle = `rgba(167, 211, 223, ${this.transparency})`;
            crc.stroke();
            crc.fill(bubble);
        }

        move(): void {
            this.y -= this.dy;
        }

        update(): void {
            this.move();
            this.draw();
        }
    }
}