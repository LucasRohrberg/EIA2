namespace A4 {
    window.addEventListener("load", init);

    let sum: number = 0;
    let customerOrder: string = "";

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }

    function handleChange(_event: Event) {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let price: number;

        if (target.name == "ice" && target.checked == true) {
            price = Number(target.getAttribute("price"));
            sum += price;
            customerOrder = `<p id="${target.id}r">${target.value}, ${price}€</p>`;
            updateCustomerOrder(customerOrder);
            updateSum(sum);
        }
        if (target.name == "ice" && target.checked == false) {
            price = Number(target.getAttribute("price"));
            sum -= price;
            document.getElementById(`${target.id}r`).outerHTML = "";
            updateSum(sum);
        }
        if (target.name == "extras" && target.checked == true) {
            price = Number(target.getAttribute("price"));
            sum += price;
            customerOrder = `<p id="${target.id}r">${target.value}, ${price}€</p>`;
            updateCustomerOrder(customerOrder);
            updateSum(sum);
        }
        if (target.name == "extras" && target.checked == false) {
            price = Number(target.getAttribute("price"));
            sum -= price;
            document.getElementById(`${target.id}r`).outerHTML = "";
            updateSum(sum);
        }
    }

    function updateCustomerOrder(_customerOrder: string) {
        document.getElementById("orderSummary").innerHTML += _customerOrder;
    }

    function updateSum(sum: number) {
        document.getElementById("sum").innerHTML = sum.toFixed(2);
    }
}