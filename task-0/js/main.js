function popup() {
    var name = prompt("Wie ist dein Name?", "Hier Name einfügen...");
    if (name != null) {
        greeting(name);
        console.log("Herzlich Willkommen, " + name + "!");
    }
}
function greeting(nameRef) {
    document.getElementById("insertName").innerHTML = "Herzlich Willkommen, " + nameRef + "!";
}
//# sourceMappingURL=main.js.map