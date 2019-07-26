namespace t12 {
    export class Food extends Things {

        dy: number;

        constructor(_x: number, _y: number) {
            super();
            console.log(_x + " " + _y);
            this.dy = 3;
            this.x = _x;
            this.y = _y;
        }

        move(): void {
            if (this.y < 900) {
                this.y += this.dy;
            }
        }

        draw(): void {
            let food: Path2D = new Path2D();
            food.moveTo(this.x, this.y);
            food.lineTo(this.x + 10, this.y + 2);
            food.lineTo(this.x + 10, this.y + 12);
            food.lineTo(this.x, this.y + 10);
            food.closePath();
            crc.fillStyle = "#724039";
            crc.fill(food);
        }
    }
}