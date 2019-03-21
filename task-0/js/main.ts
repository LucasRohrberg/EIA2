function popup():void {
    var name:string = prompt("Wie ist dein Name?", "Hier Name einfügen...");
    if (name != null) {
        greeting(name);
    }
}

function greeting(name2:string):void {
    document.getElementById("insertName").innerHTML = "Hallo " + name2;
}