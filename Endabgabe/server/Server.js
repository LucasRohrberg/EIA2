"use strict";
/**
 * Simple server managing between client and database
 * @author: Jirka Dell'Oro-Friedl
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Database = require("./Database");
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
    let command = query["command"];
    switch (command) {
        case "newWord":
            Database.search(findCallback);
            break;
        default:
            respond(_response, "unknown command: " + command);
            break;
    }
    function findCallback(json) {
        console.log("reached callback");
        console.log("response: " + _response + "  json: " + json);
        respond(_response, json);
    }
}
function respond(_response, _json) {
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_json);
    _response.end();
}
//# sourceMappingURL=Server.js.map