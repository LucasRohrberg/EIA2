namespace A7 {
    window.addEventListener("DOMContentLoaded", init);
    // let adress: string = "http://localhost:8100/?";
    let adress: string = "https://lucasrohrberg-eisdieler.herokuapp.com/?";

    function init(_event: Event): void {
        document.getElementById("submitOrder").addEventListener("click", writeURL);
        console.log("init works.");
    }

    function writeURL(): void {
        let allInputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let generateURL: string = "";

        for (let i: number = 0; i < allInputs.length; i++) {
            if (allInputs[i].type != "radio" && allInputs[i].type != "checkbox") generateURL += `${allInputs[i].name}=${allInputs[i].value}&`;
            if (allInputs[i].type == "radio") if (allInputs[i].checked == true) generateURL += `${allInputs[i].name}=${allInputs[i].value}&`;
            if (allInputs[i].type == "checkbox") if (allInputs[i].checked == true) generateURL += `${allInputs[i].name}=${allInputs[i].value}&`;
        }
        console.log(generateURL);
        useURL(generateURL);
    }

    function useURL(_generateURL: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        console.log(adress + _generateURL);
        xhr.open("GET", adress + _generateURL, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("serverText").innerHTML = xhr.response;
        }
    }
}