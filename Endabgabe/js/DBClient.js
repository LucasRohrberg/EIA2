var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("DOMContentLoaded", init);
    let serverAddress = "https://animedrawingquiz.herokuapp.com/";
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
            output.innerText = xhr.response;
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=DBClient.js.map