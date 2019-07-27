var Endabgabe;
(function (Endabgabe) {
    let canvas;
    let crc;
    let clicked = false;
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
            if (allButtons[i].className == "color") {
                allButtons[i].addEventListener("click", changeColor);
                allButtons[i].style.background = allButtons[i].id;
            }
            if (allButtons[i].className == "width")
                allButtons[i].addEventListener("click", changeWidth);
            if (allButtons[i].id == "submitImage")
                allButtons[i].addEventListener("click", submit);
        }
    }
    function submit() {
        if (document.getElementById("drawOptions").style.display == "none")
            document.getElementById("drawOptions").style.display = "flex";
        else
            document.getElementById("drawOptions").style.display = "none";
        if (document.getElementById("inputTextArea").style.display == "none")
            document.getElementById("inputTextArea").style.display = "flex";
        else
            document.getElementById("inputTextArea").style.display = "none";
    }
    function clearCanvas() {
        crc.clearRect(0, 0, canvas.width, canvas.height);
    }
    function changeColor(_event) {
        for (let i = 0; i < allButtons.length; i++) {
            if (allButtons[i].className == "border") {
                allButtons[i].setAttribute("class", "color");
            }
        }
        let event = _event.target;
        crc.strokeStyle = event.id;
        let attribute = document.createAttribute("class");
        attribute.value = "border";
        event.setAttributeNode(attribute);
    }
    function changeWidth(_event) {
        let event = _event.target;
        crc.lineWidth = Number(event.id);
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
        // drawnPaths.push(dot);
        // console.log(drawnPaths);
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Main.js.map