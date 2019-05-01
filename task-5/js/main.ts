/*
Aufgabe: <5 - Eisdealer Reloaded>
Name: <Lucas Rohrberg>
Matrikel: <260241>
Datum: <2. Mai 2019, 0:32Uhr>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace A5 {
    window.addEventListener("DOMContentLoaded", init);

    let sum: number = 0;
    let group: number = 0;
    let allInputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

    function init(_event: Event): void {
        displayContent(shopData);
        document.getElementById("checkOrder").addEventListener("click", checkOrderForMissingInformation);
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        document.getElementById("sum").innerHTML = String(calculateSum(target)) + "€";
    }

    function calculateSum(_target: HTMLInputElement): number {
        sum = 0;
        for (let i: number = 0; i < allInputs.length; i++) {
            if (allInputs[i].type == "range") {
                sum += Number(allInputs[i].getAttribute("price")) * Number(allInputs[i].value);
            }
            if (allInputs[i].checked == true) {
                sum += Number(allInputs[i].getAttribute("price"));
            }
        }
        writeOrderSummary(allInputs);
        return sum;
    }

    function writeOrderSummary(_allInputs: HTMLCollectionOf<HTMLInputElement>): void {
        let orderSummaryText: string = "";
        
        for (let i: number = 0; i < _allInputs.length; i++) {
            if (_allInputs[i].getAttribute("type") == "range") {
                if (Number(_allInputs[i].value) > 0) {
                    orderSummaryText += `${_allInputs[i].value}x ${_allInputs[i].id} - ${_allInputs[i].getAttribute("price")}€<br>`;
                }
            }
            if (_allInputs[i].checked == true) {
                orderSummaryText += `${_allInputs[i].id} - ${_allInputs[i].getAttribute("price")}€<br>`;
            }
        }
        document.getElementById("orderSummary").innerHTML = orderSummaryText;
    }

    function displayContent(_data: HomoData): void {
        for (let key in _data) {
            let value: HeteroData[] = _data[key];
            fillContent(key, value);
        }
    }

    function fillContent(_key: string, _value: HeteroData[]): void {
        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        let legend: HTMLLegendElement = document.createElement("legend");

        legend.innerText = _key;
        fieldset.appendChild(legend);

        for (let i: number = 0; i < _value.length; i++) {
            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");
            let slider: HTMLInputElement = document.createElement("input");

            input.setAttribute("id", _value[i].product);
            input.setAttribute("price", _value[i].price.toString());
            if (_value[i].type == "radio") {
                input.setAttribute("type", "radio");
                let newGroup: string = _value[i].type + String(group);
                input.setAttribute("name", newGroup);
                input.required = true;
            }
            if (_value[i].type != "radio") input.setAttribute("type", _value[i].type);
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
            if (_key != "IceCream") fieldset.appendChild(input);
            fieldset.appendChild(label);
            if (_key == "IceCream") fieldset.appendChild(slider);
            document.body.appendChild(fieldset);
            fieldset.addEventListener("change", handleChange);
        }

        group++;
    }

    function checkOrderForMissingInformation(_event: Event): void {
        let requiredInputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let missingInfo: string = "";
        let orderedIce: number = 0;

        for (let i: number = 0; i < requiredInputs.length; i++) {
            for (let j: number = 0; j < requiredInputs.length; j++) {
                if ((requiredInputs[i].id == "Cone" && requiredInputs[i].checked == false) && (requiredInputs[j].id == "Cup" && requiredInputs[j].checked == false)) {
                    missingInfo += `Please choose a container for your ice cream. \n`;
                }

                if ((requiredInputs[i].id == "Delivery" && requiredInputs[i].checked == false) && (requiredInputs[j].id == "Pickup" && requiredInputs[j].checked == false)) {
                    missingInfo += `Please choose a delivery option. \n`;
                }
            }
            if (allInputs[i].type == "range" && Number(allInputs[i].value) > 0) {
                orderedIce++;
            }
            if (requiredInputs[i].hasAttribute("required") && requiredInputs[i].value == "") {
                missingInfo += `${requiredInputs[i].placeholder} is missing. \n`;
            }
        }
        if (orderedIce < 1) missingInfo += `Please choose at least 1 flavor of ice cream. \n`;
        if (missingInfo == "") missingInfo += `Thank you for your order.`;
        alert(missingInfo);
    }
}