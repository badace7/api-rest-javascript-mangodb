const express = require('express');
const app = express();
// const parkings = require('./parkings.json');
// const reservations = require('./reservations.json');

// Importation from database.js to access my mongodb database

const database = require('./database');

database.connect();

/**
 * Importation de MongoClient & connexion à la db
 */

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'parkingApi';
// let db;


// MongoClient.connect(url, async (err, client) => {
//    console.log("Connected succesfully to server");
//    db = await client.db(dbName); 
// });


// Middleware
app.use(express.json());


// Requête pour afficher les parkings
// Requête type GET / POST / PUT / DELETE

/**
 *  
 * Other synthax [promises]
 * 
 */
// app.get('/parkings', (req, res) => {
//     db.collection('parkings').find({}).toArray()
//         .then(docs => res.status(200).json(docs))
//         .catch(err => {
//             console.log();
//             throw err
//         });
        
//     });

// Permet de récupérer la totalité des parkings et de les affichers
app.get('/parkings', async (req,res) => {
    try {
        const docs = await db.collection('parkings').find({}).toArray();
        res.status(200).json(docs);
    } catch (err) {
        console.log(err);
        throw err;
    };
});

// Permet de récupérer un parking en fonction de son id
app.get('/parkings/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const docs = await db.collection('parkings').find({id}).toArray();
        res.status(200).json(docs);
    } catch (err) {
        console.log(err);
        throw err;
    }
});



app.post('/parkings', async (req,res) => {
    try {
        const parkings = await db.collection('parkings').insertOne(req.body); 
        res.status(200).json(parkings);
    } catch (err) {
       console.log(err); 
       throw err;
    } 
});

app.patch('/parkings/:id', async (req, res) => {

   const id = parseInt(req.params.id);
   const idQuery = { id:id };
   const myQuery = {
       $set: {
        name: req.body.name,
        city: req.body.city,
        type: req.body.type
       }
   };
   try {
        const parking = await db.collection('parkings').updateOne(idQuery, myQuery);
        res.status(200).json(parking)

   } catch (err) {
       console.log(err);
       throw err; 
   }
   
});

app.put('/parkings/:id', async (req, res) => {

   const id = parseInt(req.params.id);
   const idQuery = { id:id };
   const myQuery = {
       $set: {
        name: req.body.name,
        city: req.body.city,
        type: req.body.type
       }
   };
   try {
        const parking = await db.collection('parkings').updateOne(idQuery, myQuery);
        res.status(200).json(parking)

   } catch (err) {
       console.log(err);
       throw err; 
   }
   
});

app.delete('/parkings/:id', async (req,res) => {

    const id = parseInt(req.params.id);
    try {
       const parkings = await db.collection('parkings').deleteOne({id:id});
       res.status(200).json(parkings);
    } catch (err) {
        console.log(err);
        throw err;
    }

})


// Requête pour reservation.
app.get('/parkings/:id/reservations/', async (req,res) => {

    const id = parseInt(req.params.id);

    try {

        const reservations = await db.collection('reservations').find({}).toArray();
        const reservation = reservations.filter(reservation => reservation.parkingId === id);
        res.status(200).json(reservation);

    } catch (err) {
        console.log(err);
        throw err;
    }

});

app.get('/parkings/:id/reservations/:idRes/', async (req,res) => {

    const id = parseInt(req.params.id);
    const idRes = parseInt(req.params.idRes);

    try {

       const reservations = await db.collection('reservations').find({}).toArray();
       const reservationFilterById = reservations.filter(reservation => reservation.parkingId === id);
       const reservation = reservationFilterById.find(reservation => reservation.id === idRes);
       res.status(200).json(reservation);

    } catch (err) {

        console.log(err);
        throw err;

    }
});

// Lancement serveur Nodejs
app.listen(8000, () => {

    console.log('serveur à l\'écoute');

});