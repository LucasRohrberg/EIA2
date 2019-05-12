var A7;
(function (A7) {
    window.addEventListener("DOMContentLoaded", init);
    // let adress: string = "http://localhost:8100/";
    let adress = "https://lucasrohrberg-eisdieler.herokuapp.com/";
    function init(_event) {
        document.getElementById("submit").addEventListener("click", writeURL);
        console.log("init works.");
    }
    function writeURL() {
        let allInputs = document.getElementsByTagName("input");
        let generateURL = "";
        for (let i = 0; i < allInputs.length; i++) {
            generateURL += allInputs[i].name;
        }
        console.log(generateURL);
        useURL(generateURL);
    }
    function useURL(_generateURL) {
        let xhr = new XMLHttpRequest();
        console.log(adress + _generateURL);
        xhr.open("GET", adress + _generateURL, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("serverText").innerHTML = xhr.response;
        }
    }
})(A7 || (A7 = {}));
//# sourceMappingURL=SendData.js.map