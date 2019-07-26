var Endabgabe;
(function (Endabgabe) {
    let canvas;
    let crc;
    let clicked;
    let oldPosX;
    let oldPosY;
    let allButtons = document.getElementsByTagName("button");
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", mousedown);
    document.addEventListener("mouseup", mouseup);
    document.addEventListener("mousemove", mousemove);
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        document.getElementById("clearCanvas").addEventListener("click", clearCanvas);
        for (let i = 0; i < allButtons.length; i++) {
            document.getElementsByClassName("color")[i].addEventListener("click", changeColor);
        }
    }
    function clearCanvas() {
        crc.clearRect(0, 0, canvas.width, canvas.height);
    }
    function changeColor(_event) {
        console.log(crc.strokeStyle);
        let event = _event.target;
        crc.strokeStyle = event.id;
        console.log(crc.strokeStyle);
    }
    function mousedown(_event) {
        clicked = true;
        oldPosX = _event.offsetX;
        oldPosY = _event.offsetY;
    }
    function mouseup() {
        clicked = false;
    }
    function mousemove(_event) {
        let event = _event.target;
        if (clicked == true) {
            if (event.id == "mainCanvas") {
                draw(_event.offsetX, _event.offsetY, oldPosX, oldPosY);
                oldPosX = _event.offsetX;
                oldPosY = _event.offsetY;
                console.log("X: " + _event.offsetX + " Y: " + _event.offsetY);
            }
        }
    }
    function draw(_x, _y, _oldX, _oldY) {
        let dot = new Path2D();
        dot.moveTo(_oldX, _oldY);
        dot.lineTo(_x, _y);
        dot.closePath();
        crc.stroke(dot);
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Main.js.map