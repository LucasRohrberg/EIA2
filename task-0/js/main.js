function popup() {
    var name = prompt("Wie ist dein Name?", "Hier Name einfügen...");
    if (name != null) {
        greeting(name);
    }
}
function greeting(name2) {
    document.getElementById("insertName").innerHTML = "Hallo " + name2;
}
//# sourceMappingURL=main.js.map