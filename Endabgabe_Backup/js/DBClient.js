var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("DOMContentLoaded", init);
    let serverAddress = "https://endabgabedrawingquiz.herokuapp.com/";
    // let serverAddress: string = "http://localhost:8100/";
    function init(_event) {
        console.log("Init works.");
        let newWordButton = document.getElementById("newWord");
        newWordButton.addEventListener("click", getNewWord);
    }
    function getNewWord(_event) {
        let query = "command=newWord";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementById("drawWord");
            let responseString = xhr.response;
            console.log(responseString);
            let seperatedString = responseString.split(`,`);
            seperatedString = seperatedString.toString().split(`[{`);
            seperatedString = seperatedString.toString().split(`}]`);
            seperatedString = seperatedString.toString().split(`:`);
            seperatedString = seperatedString.toString().split(` `);
            seperatedString = seperatedString.toString().split(`"`);
            seperatedString = seperatedString.toString().split(`,`);
            for (let i = 0; i < seperatedString.length; i++) {
                for (let j = 0; j < seperatedString.length; j++) {
                    if (seperatedString[i] == "") {
                        seperatedString.splice(i, 1);
                    }
                    if (seperatedString[i] == String(j)) {
                        seperatedString.splice(i, 1);
                    }
                }
            }
            for (let i = 0; i < seperatedString.length; i++) {
                if (seperatedString[i] == "") {
                    seperatedString.splice(i, 1);
                }
            }
            seperatedString.splice(seperatedString.length - 2, 2);
            console.log(seperatedString);
            let randomNumber = Math.floor(Math.random() * seperatedString.length);
            console.log(randomNumber);
            output.innerText = seperatedString[randomNumber];
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=DBClient.js.map