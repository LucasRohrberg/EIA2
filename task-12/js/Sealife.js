var t12;
(function (t12) {
    class Sealife extends t12.Things {
        constructor() {
            super();
            this.dx = Math.random() * 10 - 5;
        }
        move() {
            this.x += this.dx;
            if (this.x > 1930)
                this.x = -10;
            if (this.x < -10)
                this.x = 1930;
        }
    }
    t12.Sealife = Sealife;
})(t12 || (t12 = {}));
//# sourceMappingURL=Sealife.js.map