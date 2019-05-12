import * as Http from "http";
import * as Url from "url";

namespace A7 {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");
    let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    for (let key in url.query) {
      _response.write(key + ":" + url.query[key]);
    }
    _response.end();
    console.log("request: " + _request);
    console.log("response: " + _response);
  }
}