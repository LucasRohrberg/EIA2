var A7;
(function (A7) {
    window.addEventListener("DOMContentLoaded", init);
    let adress = "http://localhost:8100/?";
    // let adress: string = "https://lucasrohrberg-eisdieler.herokuapp.com/?";
    function init(_event) {
        document.getElementById("submitOrder").addEventListener("click", writeURL);
        console.log("init works.");
    }
    function writeURL() {
        let allInputs = document.getElementsByTagName("input");
        let generateURL = "";
        for (let i = 0; i < allInputs.length; i++) {
            if (allInputs[i].type != "radio" && allInputs[i].type != "checkbox")
                generateURL += `${allInputs[i].name}=${allInputs[i].value}&`;
            if (allInputs[i].type == "radio")
                if (allInputs[i].checked == true)
                    generateURL += `${allInputs[i].name}=${allInputs[i].value}&`;
            if (allInputs[i].type == "checkbox")
                if (allInputs[i].checked == true)
                    generateURL += `${allInputs[i].name}=${allInputs[i].value}&`;
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