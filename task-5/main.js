/*
Aufgabe: <5 - Eisdealer Reloaded>
Name: <Lucas Rohrberg>
Matrikel: <260241>
Datum: <28. April 2019, 17:22Uhr>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A5;
(function (A5) {
    window.addEventListener("DOMContentLoaded", init);
    let sum = 0;
    let order = [];
    let group = 0;
    function init(_event) {
        // console.log("Init works.");
        // console.log(shopData);
        displayContent(A5.shopData);
        document.getElementById("checkOrder").addEventListener("click", checkOrderForMissingInformation);
    }
    function handleChange(_event) {
        // console.log("Listener works.");
        let target = _event.target;
        if (target.checked == true) {
            sum += Number(target.getAttribute("price"));
            order.push(target);
            if (target.getAttribute("id") == "Cup") {
                for (let i = 0; i < order.length; i++) {
                    if (order[i].getAttribute("id") == "Cone") {
                        order.splice(i, 1);
                    }
                }
            }
            if (target.getAttribute("id") == "Cone") {
                for (let i = 0; i < order.length; i++) {
                    if (order[i].getAttribute("id") == "Cup") {
                        order.splice(i, 1);
                    }
                }
            }
            if (target.getAttribute("id") == "Delivery") {
                for (let i = 0; i < order.length; i++) {
                    if (order[i].getAttribute("id") == "Pickup") {
                        order.splice(i, 1);
                    }
                }
            }
            if (target.getAttribute("id") == "Pickup") {
                sum -= 2;
                for (let i = 0; i < order.length; i++) {
                    if (order[i].getAttribute("id") == "Delivery") {
                        order.splice(i, 1);
                    }
                }
            }
        }
        if (target.checked == false) {
            sum -= Number(target.getAttribute("price"));
            for (let i = 0; i < order.length; i++) {
                if (order[i].getAttribute("id") == target.getAttribute("id")) {
                    order.splice(i, 1);
                    // console.log(order);
                }
            }
        }
        document.getElementById("sum").innerHTML = String(sum) + "€";
        console.log(order);
        writeOrderSummary();
    }
    function displayContent(_data) {
        for (let key in _data) {
            let value = _data[key];
            // console.log("key: " + key);
            // console.log("value: " + value);
            fillContent(key, value);
        }
    }
    function fillContent(_key, _value) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        let radio = "radio";
        legend.innerText = _key;
        fieldset.appendChild(legend);
        for (let i = 0; i < _value.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            // console.log("value " + _value.length);
            input.setAttribute("id", _value[i].product);
            input.setAttribute("price", _value[i].price.toString());
            if (_value[i].type == "radio") {
                input.setAttribute("type", radio);
                let newGroup = _value[i].type + String(group);
                input.setAttribute("name", newGroup);
                console.log(newGroup);
            }
            if (_value[i].type != "radio")
                input.setAttribute("type", _value[i].type);
            label.setAttribute("for", _value[i].product);
            label.innerText = `${_value[i].product}`;
            fieldset.appendChild(input);
            fieldset.appendChild(label);
            document.body.appendChild(fieldset);
            fieldset.addEventListener("change", handleChange);
        }
        group++;
    }
    function writeOrderSummary() {
        let orderSummaryText = "";
        for (let i = 0; i < order.length; i++) {
            orderSummaryText += `1x ${order[i].id} - ${order[i].getAttribute("price")}€<br>`;
        }
        document.getElementById("orderSummary").innerHTML = orderSummaryText;
    }
    function checkOrderForMissingInformation(_event) {
        let requiredInputs = document.getElementsByTagName("input");
        let missingInfo = "";
        if (order.length == 0)
            alert("Please order something first.");
        for (let i = 0; i < requiredInputs.length; i++) {
            if (requiredInputs[i].hasAttribute("required") && requiredInputs[i].value == "" && order.length != 0) {
                missingInfo += `${requiredInputs[i].placeholder} is missing. `;
            }
        }
        if (missingInfo != "")
            alert(missingInfo);
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=main.js.map