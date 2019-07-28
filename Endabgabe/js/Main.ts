namespace Endabgabe {
    let canvas: HTMLCanvasElement;
    let crc: CanvasRenderingContext2D;
    let clicked: boolean = false;
    let drawing: boolean = true;
    let oldPosX: number;
    let oldPosY: number;
    let allButtons: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");
    let wordUsed: string;

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", mousedown);
    document.addEventListener("mouseup", mouseup);
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("keydown", handleKeydown);

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        document.getElementById("clearCanvas").addEventListener("click", clearCanvas);
        for (let i: number = 0; i < allButtons.length; i++) {
            if (allButtons[i].className == "color") {
                allButtons[i].addEventListener("click", changeColor);
                allButtons[i].style.background = allButtons[i].id;
            } else if (allButtons[i].className == "width") { 
                allButtons[i].addEventListener("click", changeWidth);
            } else if (allButtons[i].id == "submit") allButtons[i].addEventListener("click", submit);
        }
    }

    function handleKeydown(_event: KeyboardEvent): void {
        if (_event.keyCode == 13) submit();
    }

    function submit(): void {
        if (document.getElementById("drawOptions").style.display == "none") { //guessing
            let guessedInput: HTMLInputElement = <HTMLInputElement> document.getElementById("guess");
            let guessedWord: string = guessedInput.value;
            if (guessedWord.toLowerCase() == wordUsed.toLowerCase()) {
                alert("Congratulations, your guess was correct!");
                document.getElementById("drawOptions").style.display = "flex";
                document.getElementById("inputTextArea").style.display = "none";
                document.getElementById("drawWord").style.display = "block";
                document.getElementById("correctlyGuessedWords").innerText += `${wordUsed}\n`;
                getNewWord();
                drawing = true;

            } else {
                document.getElementById("attemptedGuesses").innerText += `${guessedWord}\n`;
            }
        } else if (document.getElementById("inputTextArea").style.display == "none") { //drawing
            wordUsed = document.getElementById("drawWord").innerText;
            drawing = false;
            document.getElementById("inputTextArea").style.display = "flex";
            document.getElementById("drawWord").style.display = "none";
            document.getElementById("drawOptions").style.display = "none";
        }
    }

    function clearCanvas(): void {
        crc.clearRect(0, 0, canvas.width, canvas.height);
    }

    function changeColor(_event: MouseEvent): void {
        for (let i: number = 0; i < allButtons.length; i++) {
            if (allButtons[i].className == "border") {
                allButtons[i].setAttribute("class", "color");
            }
        }
        let event: HTMLElement = <HTMLElement> _event.target;
        crc.strokeStyle = event.id;
        let attribute: Attr = document.createAttribute("class");
        attribute.value = "border";
        event.setAttributeNode(attribute);

    }

    function changeWidth(_event: MouseEvent): void {
        for (let i: number = 0; i < allButtons.length; i++) {
            if (allButtons[i].className == "border") {
                allButtons[i].setAttribute("class", "width");
            }
        }
        let event: HTMLElement = <HTMLElement> _event.target;
        crc.lineWidth = Number(event.id);
        let attribute: Attr = document.createAttribute("class");
        attribute.value = "border";
        event.setAttributeNode(attribute);
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
        if (drawing == true && clicked == true) {
            let event: HTMLElement = <HTMLElement> _event.target;
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
        // attempt at an undo/redo functionality, but storing the path in an array messed up the path
        // drawnPaths.push(dot);
        // console.log(drawnPaths);
    }
}