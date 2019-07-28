/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 */
import * as Mongo from "mongodb";
import { cursorTo } from "readline";
console.log("Database starting");

let databaseURL: string = "mongodb+srv://user_name:user_password@animedrawingquiz-zbvub.mongodb.net/test";

let databaseName: string = "words";
let db: Mongo.Db;
let availableWords: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://user_name:user_password@animedrawingquiz-zbvub.mongodb.net/test";
    databaseName = "words";
}

Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        availableWords = db.collection("basic");
    }
}

export function search(_callback: Function): void {
    let cursor: Mongo.Cursor = availableWords.find();
    cursor.toArray(returnSearch);
    
    function returnSearch(_e: Mongo.MongoError, wordArray: WordData[]): void {
        if (_e)
        _callback("Error" + _e);
        else {
            let collectionLength: number = Number(availableWords.count());
            let randomNumber: number = Math.floor(Math.random() * collectionLength - 1);
            _callback((wordArray[randomNumber]));
        }
    }
}