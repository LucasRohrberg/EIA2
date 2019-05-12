"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
var A7;
(function (A7) {
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
        let url = Url.parse(_request.url, true);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        for (let key in url.query) {
            _response.write(key + ":" + url.query[key]);
        }
        _response.end();
        console.log("request: " + _request);
        console.log("response: " + _response);
    }
})(A7 || (A7 = {}));
//# sourceMappingURL=Server.js.map