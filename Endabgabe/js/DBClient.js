var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("DOMContentLoaded", init);
    let serverAddress = "https://endabgabedrawingquiz.herokuapp.com/";
    // let serverAddress: string = "http://localhost:8100/";
    let previousRandomNumbers = [];
    let randomNumber;
    function init(_event) {
        console.log("Init works.");
        let newWordButton = document.getElementById("newWord");
        newWordButton.addEventListener("click", getNewWord);
        let query = "command=newWord";
        sendRequest(query, handleFindResponse);
    }
    function getNewWord() {
        let query = "command=newWord";
        sendRequest(query, handleFindResponse);
    }
    Endabgabe.getNewWord = getNewWord;
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
            function generateRandomNumber() {
                randomNumber = Math.floor(Math.random() * seperatedString.length);
                if (previousRandomNumbers.length == seperatedString.length) {
                    alert("You used up every available word. Thanks for playing! <3");
                    //location.reload();
                }
                else if (previousRandomNumbers.includes(randomNumber)) {
                    generateRandomNumber();
                }
                else {
                    previousRandomNumbers.push(randomNumber);
                }
            }
            generateRandomNumber();
            console.log(previousRandomNumbers);
            console.log(randomNumber);
            output.innerText = seperatedString[randomNumber];
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=DBClient.js.map
