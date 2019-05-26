/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 */
import * as Mongo from "mongodb";
console.log("Database starting");

// let databaseURL: string = "mongodb://localhost:27017";
let databaseURL: string = "mongodb+srv://user_name:user_password@cluster0-zbvub.mongodb.net/database";
let databaseName: string = "database";
let db: Mongo.Db;
let students: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
    //    databaseURL = "mongodb://username:password@hostname:port/database";
    databaseURL = "mongodb+srv://user_name:user_password@cluster0-zbvub.mongodb.net/database";
    databaseName = "database";
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
        students = db.collection("students"); // nimmt die collection "students" aus der db "eia2"
    }
}

export function search(_gesuchteMatrikel: string, _callback: Function): void {
    let numberGesuchteMatrikel: number;
    numberGesuchteMatrikel = parseInt(_gesuchteMatrikel);
    let cursor: Mongo.Cursor = students.find({ "matrikel": numberGesuchteMatrikel });
    cursor.toArray(returnSearch);
    console.log("WORKS :)");

    function returnSearch(_e: Mongo.MongoError, studentArray: StudentData[]): void {
        if (_e)
            _callback("Error" + _e);
        else {
            // stringify creates a json-string, passed it back to _callback
            console.log(JSON.stringify(studentArray));
            _callback(JSON.stringify(studentArray));
        }
    }
}

export function insert(_doc: StudentData): void {
    // try insertion then activate callback "handleInsert"
    students.insertOne(_doc, handleInsert); // führt handleInsert aus, wenn fertig (callback)
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e); // returned null bei keinem error
}

// try to fetch all documents from database, then activate callback
export function findAll(_callback: Function): void {
    // cursor points to the retreived set of documents in memory
    let cursor: Mongo.Cursor = students.find(); // Zeiger auf alle gefundenen Dokumente
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer); // fügt alle mit students.find() gefundenen Dokumente in ein Array hinzu // toArray erwartet callback Funktion

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, studentArray: StudentData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
}