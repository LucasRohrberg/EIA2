/*
Aufgabe: <4 - Eisdealer>
Name: <Lucas Rohrberg>
Matrikel: <260241>
Datum: <21. April 2019, 15:56Uhr>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A4 {
    window.addEventListener("load", init);

    let sum: number = 0;
    let customerOrder: string = "";
    let priceDelivery: number = 0;
    let removed: number = 0;

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }

        document.getElementById("checkOrder").addEventListener("click", checkOrderForMissingInformation)
    }

    function handleChange(_event: Event) {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let price: number;
        let slider: HTMLProgressElement = <HTMLProgressElement>document.getElementById(`${target.id}slider`);

        // Momentan keine Idee, wie ich die Slider in beide Richtungen implementiere.
        // Derzeit muss man den Slider schieben und dann das Häkchen setzen. Wenn man den Slider dann aber verschiebt und
        // den Haken entfernt, wird der neue Preis abgezogen anstatt dem vorher aufaddierten. Vmtl muss ich den Code auf Arrays umstrukturieren.
        // Da das aber die Aufgabe der nächsten Woche ist, hab ich mir die Änderung jetzt geklemmt.
        if (target.name == "ice" && target.checked == true) {
            price = Number(target.getAttribute("price"));
            sum += price * Number(slider.value);
            updateSum(sum);
            customerOrder = `<p id="${target.id}r">${target.value}: ${price * Number(slider.value)}€</p>`;
            updateCustomerOrder(customerOrder);
        }

        if (target.name == "extras" && target.checked == true) {
            price = Number(target.getAttribute("price"));
            sum += price;
            updateSum(sum);
            customerOrder = `<p id="${target.id}r">${target.value}: ${price}0€</p>`;
            updateCustomerOrder(customerOrder);
        }

        if (target.name == "ice" && target.checked == false) {
            price = Number(target.getAttribute("price"));
            sum -= price * Number(slider.value);
            updateSum(sum);
            document.getElementById(`${target.id}r`).outerHTML = "";
        }

        if (target.name == "extras" && target.checked == false) {
            price = Number(target.getAttribute("price"));
            sum -= price;
            updateSum(sum);
            document.getElementById(`${target.id}r`).outerHTML = "";
        }
        
        if (target.name == "radiogroup1") {
            document.getElementById("summaryContainer").innerHTML = target.value;
        }

        if (target.name == "radiogroup2") {
            if (target.getAttribute("id") == "delivery" && priceDelivery == 0) {
                priceDelivery = Number(target.getAttribute("price"));
                sum += priceDelivery;
                updateSum(sum);
                customerOrder = `<p id="${target.id}r">${target.value}: ${priceDelivery}€</p>`;
                updateCustomerOrder(customerOrder);
                if (removed == 1) document.getElementById("pickupr").outerHTML = "";
            } else if (target.getAttribute("id") == "pickup" && priceDelivery > 0) {
                sum -= priceDelivery;
                updateSum(sum);
                priceDelivery = 0;
                customerOrder = `<p id="${target.id}r">${target.value}: ${priceDelivery}€</p>`;
                updateCustomerOrder(customerOrder);
                document.getElementById("deliveryr").outerHTML = "";
                removed = 1;
            } else {
                priceDelivery = 0;
                customerOrder = `<p id="${target.id}r">${target.value}: ${priceDelivery}€</p>`;
                updateCustomerOrder(customerOrder);
                removed = 1;
            }
        }
    }

    function updateCustomerOrder(_customerOrder: string) {
        document.getElementById("orderSummary").innerHTML += _customerOrder;
    }

    function updateSum(_sum: number) {
        document.getElementById("sum").innerHTML = "Total: " + _sum.toFixed(2) + "€";
    }

    function checkOrderForMissingInformation(_event: Event) {
        let requiredInputs = document.getElementsByTagName("input");
        for (let i = 0; i < requiredInputs.length; i++) {
            if (requiredInputs[i].hasAttribute("required") && requiredInputs[i].value == "") {
                document.getElementById("missingInformation").innerHTML += `${requiredInputs[i].placeholder} is missing.<br>`;
            }
        }
    }
}