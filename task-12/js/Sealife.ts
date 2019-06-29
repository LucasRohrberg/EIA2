namespace t12 {
    export class Sealife extends Things {
        dx: number;

        constructor() {
            super();
            this.dx = Math.random() * 10 - 5;
        }

        move(): void {
            this.x += this.dx;
            if (this.x > 1930) this.x = -10;
            if (this.x < -10) this.x = 1930;
        }
    }


}