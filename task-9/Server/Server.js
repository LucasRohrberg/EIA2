"use strict";
/**
 * Simple server managing between client and database
 * @author: Jirka Dell'Oro-Friedl
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Database = require("./Database"); // von Mongo
console.log("Server starting");
let port = Number(process.env.PORT);
if (!port)
    port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    let query = Url.parse(_request.url, true).query;
    let command = query["command"]; // command aus url wird in command variable gespeichert, zB refresh oder insert
    let gesuchteMatrikel = query["gesuchteMatrikel"];
    switch (command) {
        case "insert":
            let student = {
                name: query["name"],
                firstname: query["firstname"],
                matrikel: parseInt(query["matrikel"])
            };
            Database.insert(student);
            respond(_response, "storing data");
            break;
        case "search":
            Database.search(gesuchteMatrikel, findCallback);
            // respond(_response, "the following documents contain your configured matrikel");
            break;
        case "refresh":
            Database.findAll(findCallback);
            break;
        default:
            respond(_response, "unknown command: " + command);
            break;
    }
    // findCallback is an inner function so that _response is in scope
    function findCallback(json) {
        console.log("reached callback");
        console.log("response: " + _response + "  json: " + json);
        respond(_response, json);
    }
}
function respond(_response, _json) {
    //console.log("Preparing response: " + _text);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_json); // "storing data" wird in z41 übergeben als _text, wird als response übergeben und als alert mit xhr.response ausgegeben
    _response.end();
}
//# sourceMappingURL=Server.js.map