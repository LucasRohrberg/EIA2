"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 */
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb+srv://user_name:user_password@animedrawingquiz-zbvub.mongodb.net/test";
let databaseName = "words";
let db;
let availableWords;
// running on heroku?
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://user_name:user_password@animedrawingquiz-zbvub.mongodb.net/test";
    databaseName = "words";
}
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        availableWords = db.collection("basic");
    }
}
function search(_callback) {
    let cursor = availableWords.find();
    cursor.toArray(returnSearch);
    function returnSearch(_e, wordArray) {
        if (_e)
            _callback("Error" + _e);
        else {
            _callback(JSON.stringify(wordArray));
        }
    }
}
exports.search = search;
//# sourceMappingURL=Database.js.map