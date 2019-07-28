namespace Endabgabe {
    window.addEventListener("DOMContentLoaded", init);
    let serverAddress: string = "https://endabgabedrawingquiz.herokuapp.com/";
    // let serverAddress: string = "http://localhost:8100/";

    function init(_event: Event): void {
        console.log("Init works.");
        let newWordButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("newWord");
        newWordButton.addEventListener("click", getNewWord);
    }

    function getNewWord(_event: Event): void {
        let query: string = "command=newWord";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLSpanElement = document.getElementById("drawWord");
            let responseString: string = xhr.response;
            console.log(responseString);
            let seperatedString: string[] = responseString.split(`,`);
            seperatedString = seperatedString.toString().split(`[{`);
            seperatedString = seperatedString.toString().split(`}]`);
            seperatedString = seperatedString.toString().split(`:`);
            seperatedString = seperatedString.toString().split(` `);
            seperatedString = seperatedString.toString().split(`"`);
            seperatedString = seperatedString.toString().split(`,`);
            for (let i: number = 0; i < seperatedString.length; i++) {
                for (let j: number = 0; j < seperatedString.length; j++) {
                    if (seperatedString[i] == "") {
                        seperatedString.splice(i, 1);
                    }
                    if (seperatedString[i] == String(j)) {
                        seperatedString.splice(i, 1);
                    }
                }
            }
            for (let i: number = 0; i < seperatedString.length; i++) {
                if (seperatedString[i] == "") {
                    seperatedString.splice(i, 1);
                }
            }
            seperatedString.splice(seperatedString.length - 2, 2);
            console.log(seperatedString);
            let randomNumber: number = Math.floor(Math.random() * seperatedString.length);
            console.log(randomNumber);
            output.innerText = seperatedString[randomNumber];
        }
    }
}