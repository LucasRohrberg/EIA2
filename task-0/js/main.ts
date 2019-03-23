function popup() {
    var name: string = prompt("Wie ist dein Name?", "Hier Namen einfügen...");
    document.getElementById("insertName").innerHTML = `Herzlich Willkommen, ${name}!`;
    console.log(`Herzlich Willkommen, ${name}!`);
}