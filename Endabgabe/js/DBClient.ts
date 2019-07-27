namespace Endabgabe {
    window.addEventListener("DOMContentLoaded", init);
    let serverAddress: string = "https://endabgabedrawingquiz.herokuapp.com/";

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
            console.log(xhr.response);
            console.log(JSON.parse(xhr.response));
            output.innerText = xhr.response;
        }
    }
}