"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
console.log("Starting server");
let port = Number(process.env.PORT);
if (!port)
    port = 8100;
let server = Http.createServer();
server.addListener("request", handleRequest);
server.addListener("listening", handleListen);
server.listen(port);
function handleListen() {
    console.log("Listening");
}
function handleRequest(_request, _response) {
    console.log("I hear voices!");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    let url = Url.parse(_request.url, true);
    for (let key in url.query) {
        _response.write(`<body>`);
        _response.write(`<fieldset>`);
        _response.write(`<legend>`);
        _response.write(`${key}`);
        _response.write(`</legend>`);
        _response.write(`${url.query[key]}`);
        _response.write(`</fieldset>`);
        _response.write(`</body>`);
    }
    _response.end();
}
//# sourceMappingURL=Server.js.map