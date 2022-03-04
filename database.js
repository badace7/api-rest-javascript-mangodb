/**
 * Connection to Mongodb database
 */

const database = {};

database.connect = async () => {

    const MongoClient = require('mongodb').MongoClient;
    const url = '';
    const dbName = '';
    let db;

    MongoClient.connect(url, (err, client) => {
    console.log("Connected succesfully to server");
    db = client.db(dbName);
    database.db = db; 
    });
} 

module.exports = database;

