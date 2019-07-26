namespace t12 {
    export class Bubbles extends Things {
        dx: number;
        dy: number;
        size: number;
        transparency: number;

        constructor(_shipX: number) {
            super();
            this.x = _shipX;
            this.y = 850;
            this.dx = Math.random() * 80 - 40;
            this.dy = 3;
            this.size = Math.random() * 15;
            this.transparency = Math.random();
        }
    
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
    }
}