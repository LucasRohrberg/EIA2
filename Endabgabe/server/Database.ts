/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 */
import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb+srv://user_name:user_password@animedrawingquiz-zbvub.mongodb.net/test";

let databaseName: string = "animedrawingquiz";
let db: Mongo.Db;
let availableWords: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://user_name:user_password@animedrawingquiz-zbvub.mongodb.net/test";
    databaseName = "animedrawingquiz";
}

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName); // wenn erfolgreich verbunden, dann liest er die gewünschte datenbank aus und speicherts in db
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
            let randomWord: number = Math.floor(Math.random() * wordArray.length);
            _callback(JSON.stringify(wordArray[randomWord]));
        }
    }
}

// // try to fetch all documents from database, then activate callback
// export function findAll(_callback: Function): void {
//     // cursor points to the retreived set of documents in memory
//     let cursor: Mongo.Cursor = availableWords.find(); // Zeiger auf alle gefundenen Dokumente
//     // try to convert to array, then activate callback "prepareAnswer"
//     cursor.toArray(prepareAnswer); // fügt alle mit students.find() gefundenen Dokumente in ein Array hinzu // toArray erwartet callback Funktion
//     console.log(cursor);
//     // toArray-handler receives two standard parameters, an error object and the array
//     // implemented as inner function, so _callback is in scope
//     function prepareAnswer(_e: Mongo.MongoError, studentArray: WordData[]): void {
//         if (_e)
//             _callback("Error" + _e);
//         else
//             // stringify creates a json-string, passed it back to _callback
//             _callback(JSON.stringify(studentArray));
//     }
// }