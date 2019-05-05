"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
var L06_Server;
(function (L06_Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT); // process.env gibt ein objekt zurück, das informationen zum environment des nutzers enthält; daraus wird der Port ausgelesen und in der Variable gespeichert
    if (!port) // Wenn es keinen Port gibt, wird er auf 8100 gesetzt
        port = 8100;
    let server = Http.createServer(); // Macht aus dem PC einen Server, erstellt einen Server
    server.addListener("request", handleRequest); // Wenn der Server eine Anfrage bemerkt, führt er handleRequest() aus
    server.addListener("listening", handleListen); // Wenn der Server eine Veränderung auf dem zu beobachtenden Port feststellt, führt er handleListen() aus
    server.listen(port); // Der Server beobachtet den Port 8100
    function handleListen() {
        console.log("Listening"); // Schreibt "Listening" in die Konsole (wenn Funktion ausgeführt wird)
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Schreibt "I hear voices!" in die Konsole (wenn Funktion ausgeführt wird)
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Setzt name & value des Headers für _response
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Überschreibt vorher festgelegten Header? setHeader schreibt nur einen Header, writeHead kann mehrere haben
        _response.write(_request.url); // Schreibt die URL der in _request gespeicherten Nachricht in den Output
        _response.end(); // Beendet das Script und gibt das aktuelle Ergebnis zurück
    }
})(L06_Server || (L06_Server = {}));
//# sourceMappingURL=Server.js.map