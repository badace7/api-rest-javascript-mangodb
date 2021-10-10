const database = require('../database');
database.connect();
const parking = {};


parking.parkingsList = async () => {
    return await database.db.collection('parkings').find({}).toArray();
}

parking.parkingById = async (id) => {
    return await database.db.collection('parkings').find({id}).toArray();
}

parking.insertParking = async (body) => {
    return await database.db.collection('parkings').insertOne(body);
}

parking.updateParking = async (id, myQuery) => {
    return await database.db.collection('parkings').updateOne(id, myQuery); 
}

parking.putParking = async (id, myQuery) => {
    return await database.db.collection('parkings').updateOne(id, myQuery);
}

parking.deleteParking = async (id) => {
    return await database.db.collection('parkings').deleteOne({id});
}


module.exports = parking;




