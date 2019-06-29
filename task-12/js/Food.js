var t12;
(function (t12) {
    class Food extends t12.Things {
        constructor(_x, _y) {
            super();
            console.log(_x + " " + _y);
            this.dy = 3;
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.y < 900) {
                this.y += this.dy;
            }
        }
        draw() {
            let food = new Path2D();
            food.moveTo(this.x, this.y);
            food.lineTo(this.x + 10, this.y + 2);
            food.lineTo(this.x + 10, this.y + 12);
            food.lineTo(this.x, this.y + 10);
            food.closePath();
            t12.crc.fillStyle = "#724039";
            t12.crc.fill(food);
        }
    }
    t12.Food = Food;
})(t12 || (t12 = {}));
//# sourceMappingURL=Food.js.map