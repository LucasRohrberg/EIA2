function popup(): void {
    var name: string = prompt("Wie ist dein Name?", "Hier Name einfügen...");
    if (name != null) {
        greeting(name);
        console.log("Herzlich Willkommen, " + name + "!");
    }
}

function greeting(nameRef: string): void {
    document.getElementById("insertName").innerHTML = "Herzlich Willkommen, " + nameRef + "!";
}