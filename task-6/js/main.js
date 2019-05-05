/*
Aufgabe: <5 - Eisdealer Reloaded>
Name: <Lucas Rohrberg>
Matrikel: <260241>
Datum: <2. Mai 2019, 0:32Uhr>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A6;
(function (A6) {
    window.addEventListener("DOMContentLoaded", init);
    let sum = 0;
    let radioGroup = 0;
    let allInputs = document.getElementsByTagName("input");
    // let serverAdress: string = "https://localhost:8100/";
    let serverAdress = "https://lucasrohrberg-eisdieler.herokuapp.com/";
    function init(_event) {
        displayContent(A6.shopData);
        document.getElementById("checkOrder").addEventListener("click", checkOrderForMissingInformation);
        document.getElementById("submit").addEventListener("click", submitData);
    }
    function submitData() {
        for (let i = 0; i < allInputs.length; i++) {
            if (allInputs[i].type == "range" && Number(allInputs[i].value) > 0) {
                serverAdress += `${allInputs[i].id}=${allInputs[i].value}_`;
            }
            if (allInputs[i].checked == true) {
                serverAdress += `${allInputs[i].id}=${allInputs[i].value}_`;
            }
        }
        window.open(serverAdress);
    }
    function displayContent(_shopData) {
        for (let key in _shopData) {
            let value = _shopData[key];
            fillContent(key, value);
        }
    }
    function fillContent(_key, _value) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = _key;
        fieldset.appendChild(legend);
        for (let i = 0; i < _value.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            let slider = document.createElement("input");
            input.setAttribute("id", _value[i].product);
            input.setAttribute("price", _value[i].price.toString());
            if (_value[i].type == "radio") {
                let newGroup = _value[i].type + String(radioGroup);
                input.setAttribute("type", _value[i].type);
                input.setAttribute("name", newGroup);
                input.required = true;
            }
            if (_value[i].type != "radio")
                input.setAttribute("type", _value[i].type);
            label.setAttribute("for", _value[i].product);
            label.innerText = `${_value[i].product} `;
            if (_key == "IceCream") {
                slider.setAttribute("type", _value[i].type);
                slider.setAttribute("name", "slider");
                slider.setAttribute("min", "0");
                slider.setAttribute("max", "9");
                slider.setAttribute("step", "1");
                slider.setAttribute("value", "0");
                slider.setAttribute("price", String(_value[i].price));
                slider.setAttribute("id", _value[i].product);
            }
            if (_key != "IceCream")
                fieldset.appendChild(input);
            fieldset.appendChild(label);
            if (_key == "IceCream") {
                fieldset.appendChild(slider);
                fieldset.setAttribute("id", "iceCream");
            }
            document.getElementById("iceCreamContent").appendChild(fieldset);
            fieldset.addEventListener("change", handleChange);
        }
        radioGroup++;
    }
    function handleChange(_event) {
        document.getElementById("sum").innerHTML = `Total: ${String(calculateSum())}€ <hr>`;
    }
    function calculateSum() {
        sum = 0;
        for (let i = 0; i < allInputs.length; i++) {
            if (allInputs[i].type == "range") {
                sum += Number(allInputs[i].getAttribute("price")) * Number(allInputs[i].value);
            }
            if (allInputs[i].checked == true) {
                sum += Number(allInputs[i].getAttribute("price"));
            }
        }
        writeOrderSummary();
        return sum;
    }
    function writeOrderSummary() {
        let orderSummaryText = "";
        for (let i = 0; i < allInputs.length; i++) {
            if (allInputs[i].getAttribute("type") == "range") {
                if (Number(allInputs[i].value) > 0) {
                    orderSummaryText += `${allInputs[i].value}x ${allInputs[i].id} - ${allInputs[i].getAttribute("price")}€<br>`;
                }
            }
            if (allInputs[i].checked == true) {
                orderSummaryText += `${allInputs[i].id} - ${allInputs[i].getAttribute("price")}€<br>`;
            }
        }
        document.getElementById("orderSummary").innerHTML = orderSummaryText;
    }
    function checkOrderForMissingInformation() {
        let missingInfo = "";
        let orderedIce = 0;
        for (let i = 0; i < allInputs.length; i++) {
            for (let j = 0; j < allInputs.length; j++) {
                if ((allInputs[i].id == "Cone" && allInputs[i].checked == false) && (allInputs[j].id == "Cup" && allInputs[j].checked == false)) {
                    missingInfo += `Please choose a container for your ice cream. \n`;
                }
                if ((allInputs[i].id == "Delivery" && allInputs[i].checked == false) && (allInputs[j].id == "Pickup" && allInputs[j].checked == false)) {
                    missingInfo += `Please choose a delivery option. \n`;
                }
            }
            if (allInputs[i].type == "range" && Number(allInputs[i].value) > 0) {
                orderedIce++;
            }
            if (allInputs[i].hasAttribute("required") && allInputs[i].value == "") {
                missingInfo += `${allInputs[i].placeholder} is missing. \n`;
            }
        }
        if (orderedIce < 1)
            missingInfo += `Please choose at least 1 flavor of ice cream. \n`;
        if (missingInfo == "")
            missingInfo += `Thank you for your order.`;
        alert(missingInfo);
    }
})(A6 || (A6 = {}));
//# sourceMappingURL=main.js.map