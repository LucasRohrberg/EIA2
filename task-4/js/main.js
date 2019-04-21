var A4;
(function (A4) {
    window.addEventListener("load", init);
    let sum = 0;
    let customerOrder = "";
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        let price;
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
    function updateCustomerOrder(_customerOrder) {
        document.getElementById("orderSummary").innerHTML += _customerOrder;
    }
    function updateSum(sum) {
        document.getElementById("sum").innerHTML = sum.toFixed(2);
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=main.js.map