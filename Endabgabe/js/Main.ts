namespace Endabgabe {
    let canvas: HTMLCanvasElement;
    let crc: CanvasRenderingContext2D;
    let clicked: boolean;
    let oldPosX: number;
    let oldPosY: number;
    let allButtons: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", mousedown);
    document.addEventListener("mouseup", mouseup);
    document.addEventListener("mousemove", mousemove);

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        document.getElementById("clearCanvas").addEventListener("click", clearCanvas);
        for (let i: number = 0; i < allButtons.length; i++) {
            document.getElementsByClassName("color")[i].addEventListener("click", changeColor);
        }
    }

    function clearCanvas(): void {
        crc.clearRect(0, 0, canvas.width, canvas.height);
    }

    function changeColor(_event: MouseEvent): void {
        console.log(crc.strokeStyle);
        let event: HTMLElement = <HTMLElement> _event.target;
        crc.strokeStyle = event.id;
        console.log(crc.strokeStyle);
    }

    function mousedown(_event: MouseEvent): void {
        clicked = true;
        oldPosX = _event.offsetX;
        oldPosY = _event.offsetY;
    }

    function mouseup(): void {
        clicked = false;
    }

    function mousemove(_event: MouseEvent): void {
        let event: HTMLElement = <HTMLElement> _event.target;
        if (clicked == true) {
            if (event.id == "mainCanvas") {
                draw(_event.offsetX, _event.offsetY, oldPosX, oldPosY);
                oldPosX = _event.offsetX;
                oldPosY = _event.offsetY;
                console.log("X: " + _event.offsetX + " Y: " + _event.offsetY);
            }
        }
    }

    function draw(_x: number, _y: number, _oldX: number, _oldY: number): void {
        let dot: Path2D = new Path2D();
        dot.moveTo(_oldX, _oldY);
        dot.lineTo(_x, _y);
        dot.closePath();
        crc.stroke(dot);
    }
}