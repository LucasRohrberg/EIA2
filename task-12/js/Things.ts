namespace t12 {
    export class Things {
        x: number;
        y: number;

        constructor() {
            this.x = Math.random() * 1920;
            this.y = Math.random() * 800;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            //
        }

        draw(): void {
            //
        }
    }
}